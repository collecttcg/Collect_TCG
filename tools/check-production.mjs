import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';

const root=fileURLToPath(new URL('../',import.meta.url));

function walk(dir){
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>{
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()){
      if(['.git','node_modules','release'].includes(entry.name)) return [];
      return walk(full);
    }
    return [full];
  });
}

let jsCount=0;
for(const file of walk(root)){
  if(!file.endsWith('.js')) continue;
  execFileSync(process.execPath,['--check',file],{stdio:'pipe'});
  const source=fs.readFileSync(file,'utf8');
  for(const match of source.matchAll(/\bfrom\s+['"](\.[^'"]+)['"]/g)){
    const target=path.resolve(path.dirname(file),match[1].split(/[?#]/,1)[0]);
    if(!fs.existsSync(target)) throw new Error('Missing relative import: '+target);
  }
  jsCount++;
}

const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g)){
  const rel=match[1].split(/[?#]/,1)[0].replace(/^\.\//,'');
  if(!fs.existsSync(path.join(root,rel))) throw new Error('Missing HTML asset: '+match[1]);
}

if(fs.existsSync(path.join(root,'PRODUCTION-DEPLOY.txt'))) throw new Error('Retired PRODUCTION-DEPLOY.txt returned.');

const misplacedSql=walk(root)
  .map(file=>path.relative(root,file))
  .filter(rel=>rel.toLowerCase().endsWith('.sql') && !rel.startsWith('migrations'+path.sep));
if(misplacedSql.length) throw new Error('SQL files must live under migrations/: '+misplacedSql.join(', '));

const requiredMigrations=[
  'migrations/2026/2026-09-15-v10-LANGUAGE-DETAILS.sql',
  'migrations/2026/2026-09-15-v13-EXTEND-LANGUAGE-OPTIONS.sql',
  'migrations/2026/2026-09-17-v05-COUNTRY-CARD-DEMAND.sql',
  'migrations/2026/2026-09-24-v01-SEO-PUBLIC-CATALOG.sql',
  'migrations/2026/2026-09-24-v05-DISCOVERY-ATTRIBUTION.sql',
  'migrations/2026/2026-09-24-v06-DISCOVERY-SUMMARY.sql',
  'migrations/2026/2026-09-26-v05-PUBLIC-HIDDEN-LISTING-GUARD.sql'
];
for(const rel of requiredMigrations){
  if(!fs.existsSync(path.join(root,rel))) throw new Error('Missing migration history: '+rel);
}

const baselinePath=path.join(root,'COLLECT_TCG_BASELINE.md');
if(!fs.existsSync(baselinePath)) throw new Error('Missing COLLECT_TCG_BASELINE.md');
const baseline=fs.readFileSync(baselinePath,'utf8');
for(const marker of [
  'Latest Production: `2026-09-27-v08`',
  'Latest Development: `2026-09-27-v25`',
  'Development version promoted from for Production `2026-09-27-v08`: `2026-09-27-v25`',
  'QR Generator',
  'migrations/2026/'
]){
  if(!baseline.includes(marker)) throw new Error('Baseline missing marker: '+marker);
}

const registry=fs.readFileSync(path.join(root,'src/app/register-features.js'),'utf8');
if(!registry.includes("owner/qr-generator.js?v=2026-09-27-v01")) throw new Error('QR Generator module is not registered.');
if(!registry.includes('registerQrGenerator(appContext)')) throw new Error('QR Generator registration call is missing.');

const insights=fs.readFileSync(path.join(root,'src/features/owner/insights-dashboard.js'),'utf8');
if(!insights.includes('27-insights-dashboard.css')) throw new Error('Owner Insights stylesheet wiring missing.');
if(!fs.existsSync(path.join(root,'src/styles/27-insights-dashboard.css'))) throw new Error('Owner Insights stylesheet missing.');

if(!fs.existsSync(path.join(root,'docs/BACKUP-RECOVERY.md'))) throw new Error('Missing Production recovery documentation.');
if(fs.existsSync(path.join(root,'.github/workflows/backup-last-known-good.yml'))) throw new Error('Retired backup workflow returned.');
const releaseWorkflow=fs.readFileSync(path.join(root,'.github/workflows/production-seo.yml'),'utf8');
if(!releaseWorkflow.includes('Confirm Pages deployment and advance last-known-good')) throw new Error('Pages-gated last-known-good step missing.');
if(!releaseWorkflow.includes('actions/runs?head_sha=')) throw new Error('Release workflow must query Pages status for the exact final commit.');
if(!releaseWorkflow.includes('Pages deployment failed with conclusion')) throw new Error('Release workflow must fail when Pages deployment fails.');
if(!releaseWorkflow.includes('git merge-base --is-ancestor')) throw new Error('Last-known-good advancement must prevent rollback to older history.');
if(!releaseWorkflow.includes('HEAD:refs/heads/production-last-known-good')) throw new Error('Last-known-good branch update missing.');

console.log(`Checked ${jsCount} JavaScript files, imports, HTML assets, migrations and Production structure.`);


const orderingModule=await import('../src/features/inventory/ordering.js?production-check=2026-09-27-v08');
const orderApp={safeCardId:value=>String(value||'').trim()};
orderingModule.register(orderApp);
const mergeIds=['a','b','c','d','e','f'];
const merged=orderApp.mergeFilteredCustomOrder(mergeIds,['e','c','a']);
if(JSON.stringify(merged)!==JSON.stringify(['e','b','c','d','a','f'])){
  throw new Error('Production filtered custom-order merge changed hidden card slots.');
}
const pageSource=fs.readFileSync(path.join(root,'src/features/inventory/page.js'),'utf8');
if(pageSource.includes('Clear Collection filters before rearranging')) throw new Error('Filtered rearranging is still blocked.');
if(!pageSource.includes('mergeFilteredCustomOrder(collectionFullCustomCardIds(),visibleIds)')) throw new Error('Filtered reorder merge wiring missing.');
if(!pageSource.includes('function collectionCanRearrangeGameGroups()')) throw new Error('Filtered game-order guard missing.');
console.log('Validated filtered custom-order merge.');

const inventoryPageSource=fs.readFileSync(path.join(root,'src/features/inventory/page.js'),'utf8');
const zatchLogoPath=path.join(root,'assets/zatch-bell-card-battle-logo.webp');
if(!fs.existsSync(zatchLogoPath)) throw new Error('Missing local Zatch Bell game-browser logo.');
if(inventoryPageSource.includes('raw.githubusercontent.com/collecttcg/Collect_TCG_Beta') || inventoryPageSource.includes('raw.githubusercontent.com/collecttcg/Collect_TCG_Dev')) throw new Error('Production must not depend on Development repository runtime assets.');
if(!inventoryPageSource.includes('./assets/zatch-bell-card-battle-logo.webp')) throw new Error('Production Zatch Bell logo is not wired to its local asset.');
console.log('Validated Production-local Zatch Bell logo dependency.');

if(!fs.existsSync(path.join(root,'src/features/inventory/pagination.js'))) throw new Error('Promoted Inventory pagination module missing.');
if(!pageSource.includes('createInventoryPagination')) throw new Error('Inventory pagination wiring missing.');
const orderingSource=fs.readFileSync(path.join(root,'src/features/inventory/ordering.js'),'utf8');
if(!orderingSource.includes('function insertNewInventoryCardIntoCustomOrder')) throw new Error('New-card Custom Order insertion behavior missing.');
const addSource=fs.readFileSync(path.join(root,'src/features/owner/add.js'),'utf8');
if(!addSource.includes('insertNewInventoryCardIntoCustomOrder(saved)')) throw new Error('Add flow is not wired to new-card Custom Order insertion.');
if(insights.includes('2026-09-17-v18-COUNTRY-CARD-DEMAND.sql') || insights.includes('2026-09-24-v08-DISCOVERY-SUMMARY.sql')) throw new Error('Development SQL-help filename leaked into Production Insights.');
if(!insights.includes('salesActionQueueRows') || !insights.includes('What to act on next')) throw new Error('Promoted Owner Insights sales action queue missing.');
const analyticsSource=fs.readFileSync(path.join(root,'src/services/analytics.js'),'utf8');
if(analyticsSource.includes('analytics_test') || analyticsSource.includes('isDevelopmentAnalyticsTestSession')) throw new Error('Development-only analytics test bypass leaked into Production.');
console.log('Validated Production v08 promoted Development behavior and Production-only boundaries.');
