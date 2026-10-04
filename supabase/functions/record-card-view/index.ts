import { createClient } from "jsr:@supabase/supabase-js@2";
const SUPABASE_URL=Deno.env.get("SUPABASE_URL")!;
const SECRET_KEYS=JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS")!);
const supabase=createClient(SUPABASE_URL,SECRET_KEYS["default"]);
const corsHeaders={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"};
function validCountry(value:unknown){const code=String(value||"").trim().toUpperCase();return /^[A-Z]{2}$/.test(code)&&code!=="XX"?code:"";}
function isUsableIp(ip:string){return !!ip&&ip!=="::1"&&!ip.startsWith("127.")&&!ip.startsWith("10.")&&!ip.startsWith("192.168.")&&!/^172\.(1[6-9]|2\d|3[01])\./.test(ip);}
async function resolveCountry(req:Request,rawIp:string){
 for(const candidate of [req.headers.get("cf-ipcountry"),req.headers.get("x-country-code"),req.headers.get("x-vercel-ip-country"),req.headers.get("cloudfront-viewer-country")]){const code=validCountry(candidate);if(code)return code;}
 if(!isUsableIp(rawIp))return "";
 try{const response=await fetch(`https://ipwho.is/${encodeURIComponent(rawIp)}?fields=success,country_code`,{headers:{Accept:"application/json"}});if(!response.ok)return "";const data=await response.json();return data?.success===false?"":validCountry(data?.country_code);}catch{return "";}
}
Deno.serve(async(req)=>{
 if(req.method==="OPTIONS")return new Response("ok",{headers:corsHeaders});
 if(req.method!=="POST")return new Response("Method not allowed",{status:405,headers:corsHeaders});
 try{
  const body=await req.json();const card_id=body?.card_id;const visitor_id=body?.visitor_id;
  if(!card_id||!visitor_id||typeof visitor_id!=="string"||visitor_id.trim().length<8)return new Response(JSON.stringify({counted:false,reason:"invalid_request"}),{status:400,headers:{...corsHeaders,"Content-Type":"application/json"}});
  const rawIp=req.headers.get("cf-connecting-ip")||req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"";
  if(!rawIp)return new Response(JSON.stringify({counted:false,reason:"missing_ip"}),{status:400,headers:{...corsHeaders,"Content-Type":"application/json"}});
  const ipHash=await hashValue(rawIp);
  const {data:allowed,error:rateError}=await supabase.rpc("check_view_rate_limit",{p_ip_hash:ipHash});
  if(rateError)return new Response(JSON.stringify({counted:false,reason:"server_error"}),{status:500,headers:{...corsHeaders,"Content-Type":"application/json"}});
  if(!allowed)return new Response(JSON.stringify({counted:false,reason:"rate_limited"}),{status:429,headers:{...corsHeaders,"Content-Type":"application/json"}});
  const {error:recordError}=await supabase.rpc("record_card_view_event",{p_card_id:card_id,p_visitor_id:visitor_id.trim().slice(0,128)});
  if(recordError)return new Response(JSON.stringify({counted:false,reason:"record_failed"}),{status:500,headers:{...corsHeaders,"Content-Type":"application/json"}});
  const countryCode=await resolveCountry(req,rawIp);
  return new Response(JSON.stringify({counted:true,country_code: countryCode || null}),{status:200,headers:{...corsHeaders,"Content-Type":"application/json"}});
 }catch(error){console.error(error);return new Response(JSON.stringify({counted:false,reason:"invalid_request"}),{status:400,headers:{...corsHeaders,"Content-Type":"application/json"}});}
});
async function hashValue(value:string){const bytes=new TextEncoder().encode(value);const digest=await crypto.subtle.digest("SHA-256",bytes);return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("");}
