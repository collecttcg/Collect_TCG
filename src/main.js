import { createProductionRuntime } from './app/production-runtime.js?v=2026-09-29-v09';
import { registerFeatures } from './app/register-features.js?v=2026-10-05-v01&release=2026-10-16-v02&bulk=1';
import { register as registerScanner } from './features/owner/card-scanner.js?v=2026-10-25-v01';
import { initializeApp } from './app/initialize.js?v=2026-10-05-v01';
import { setup as setup1 } from './ui/enhancement-1.js';
import { setup as setup2 } from './ui/enhancement-2.js';
import { setup as setup3 } from './ui/enhancement-3.js';

try{
  if(!document.getElementById('aiCardScannerStyles')){const style=document.createElement('style');style.id='aiCardScannerStyles';style.textContent='.ai-card-scanner{display:flex;flex-direction:column;gap:10px;width:100%;min-width:0;box-sizing:border-box;padding:14px 16px;overflow:hidden}.ai-card-scanner__actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;width:100%}.ai-card-scanner__actions button{width:100%;min-width:0}.ai-card-scanner__results,.ai-card-scanner__result,.ai-card-scanner__market{display:block;width:100%;min-width:0;box-sizing:border-box}.ai-card-scanner__result,.ai-card-scanner__market{overflow-wrap:anywhere;white-space:normal}@media(max-width:700px){.ai-card-scanner__actions{grid-template-columns:1fr}}';document.head.appendChild(style);}
  const runtime=createProductionRuntime();
  const appContext={localStorage:runtime.localStorage,sessionStorage:runtime.sessionStorage,fetch:runtime.fetch};
  registerFeatures(appContext);
  registerScanner(appContext);
  initializeApp(appContext,runtime);
  setup1(appContext);setup2(appContext);setup3(appContext);
}catch(error){console.error('Collect TCG startup failed:',error);const notice=document.createElement('p');notice.setAttribute('role','alert');notice.textContent='Collect TCG could not start: '+error.message;document.body.prepend(notice);}
