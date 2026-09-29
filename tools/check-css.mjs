import fs from "node:fs";
import path from "node:path";
const root=process.cwd();
const styleDir=path.join(root,"src/styles");
const files=fs.readdirSync(styleDir).filter(name=>name.endsWith(".css")).sort();
const deadSelectors=[".mobile-buy-sticky",".mobile-buy-backdrop",".mobile-buy-close",".detail-action-bar",".home-premium-hero-meta",".home-premium-hero-visual",".desktop-filter-panel",".inventory-search-filter-row",".home-discovery-grid",".inventory-grid"];
function assertCssSyntax(file,text){
  if(/\\n\\n\/\*/.test(text)) throw new Error(`${file}: literal escaped newlines found outside generated strings`);
  let depth=0,quote="",comment=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i],next=text[i+1];
    if(comment){if(ch==="*"&&next==="/"){comment=false;i++;}continue;}
    if(quote){if(ch==="\\"){i++;continue;}if(ch===quote)quote="";continue;}
    if(ch==="/"&&next==="*"){comment=true;i++;continue;}
    if(ch==='"'||ch==="'"){quote=ch;continue;}
    if(ch==="{")depth++;
    if(ch==="}"){depth--;if(depth<0)throw new Error(`${file}: unexpected }`);}
  }
  if(comment||quote||depth!==0) throw new Error(`${file}: unbalanced CSS structure (${JSON.stringify({comment,quote,depth})})`);
}
for(const name of files) assertCssSyntax(name,fs.readFileSync(path.join(styleDir,name),"utf8"));
const sourceFiles=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory()){if(entry.name==="cards")continue;walk(full);}else sourceFiles.push(full);}}
walk(path.join(root,"src"));sourceFiles.push(path.join(root,"index.html"));
const nonCss=sourceFiles.filter(file=>!file.endsWith(".css")).map(file=>fs.readFileSync(file,"utf8")).join("\n");
for(const selector of deadSelectors){
  const cls=selector.slice(1);
  if(nonCss.includes(cls)) throw new Error(`Dead-selector guard is no longer valid: ${selector} is referenced by active source`);
  for(const name of files) if(fs.readFileSync(path.join(styleDir,name),"utf8").includes(selector)) throw new Error(`${name}: obsolete selector remains: ${selector}`);
}
if(files.join(',')!==['01-foundation.css','02-components.css','27-insights-dashboard.css'].join(',')) throw new Error('Unexpected active Production stylesheet set: '+files.join(', '));
console.log(`CSS checks passed (${files.length} active stylesheets).`);
