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
  'Latest Production: `2026-09-29-v10`',
  'Latest Development: `2026-09-29-v14`',
  'Development promoted from: `2026-09-29-v14`',
  'QR Generator',
  'migrations/2026/'
]){
  if(!baseline.includes(marker)) throw new Error('Baseline missing marker: '+marker);
}

const registry=fs.readFileSync(path.join(root,'src/app/register-features.js'),'utf8');
const mainSource=fs.readFileSync(path.join(root,'src/main.js'),'utf8');
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


const orderingModule=await import('../src/features/inventory/ordering.js?production-check=2026-09-29-v02');
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
if(!orderingSource.includes('function inventoryNewCardGameKey(card)')) throw new Error('Game-aware new-card placement helper missing.');
if(!orderingSource.includes('function compareInventoryNewCardPlacement(a,b)')) throw new Error('Grade/condition new-card comparator missing.');

orderApp.normalizeFilterValue=value=>String(value||'').trim().toLowerCase();
orderApp.effectiveFormat=card=>String(card?.format||'Raw');
orderApp.cardMatchesListingScope=(card,scope)=>scope==='inventory' && card?.availability!=='Collection (NFS)';
orderApp.inventoryCardOrderById=new Map();
orderApp.inventoryGameOrderByKey=new Map();
const orderIds=Array.from({length:8},(_,index)=>`00000000-0000-4000-8000-${String(index+1).padStart(12,'0')}`);
const orderExisting=[
  {id:orderIds[0],name:'OPCG PSA 10',game:'One Piece Card Game',format:'Graded',grading:[{company:'PSA',grade:'10'}]},
  {id:orderIds[1],name:'OPCG NM',game:'One Piece Card Game',format:'Raw',condition:'NM',grading:[]},
  {id:orderIds[2],name:'OPCG Sealed',game:'One Piece Card Game',format:'Sealed',condition:'SEALED',grading:[]},
  {id:orderIds[3],name:'Hyper Battle PSA 9',game:'One Piece Hyper Battle',format:'Graded',grading:[{company:'PSA',grade:'9'}]},
  {id:orderIds[4],name:'Hyper Battle LP',game:'One Piece Hyper Battle',format:'Raw',condition:'LP',grading:[]},
  {id:orderIds[5],name:'Hyper Battle Sealed',game:'One Piece Hyper Battle',format:'Sealed',condition:'SEALED',grading:[]}
];
orderExisting.forEach((card,index)=>orderApp.inventoryCardOrderById.set(card.id,index+1));
orderApp.inventoryGameOrderByKey.set(orderApp.normalizeFilterValue('One Piece Card Game'),1);
orderApp.inventoryGameOrderByKey.set(orderApp.normalizeFilterValue('One Piece Hyper Battle'),2);
const hpZoro={id:orderIds[6],name:'Zoro C401',game:'One Piece Hyper Battle',format:'Raw',condition:'HP',grading:[],availability:'Available'};
orderApp.cards=[...orderExisting,hpZoro];
const hpOrder=orderApp.inventoryCustomOrderWithNewCard(hpZoro);
if(JSON.stringify(hpOrder)!==JSON.stringify([orderIds[0],orderIds[1],orderIds[2],orderIds[3],orderIds[4],orderIds[6],orderIds[5]])){
  throw new Error('Hyper Battle HP card did not stay inside the Hyper Battle block.');
}
const psa10={id:orderIds[7],name:'Hyper Battle PSA 10',game:'One Piece Hyper Battle',format:'Graded',grading:[{company:'PSA',grade:'10'}],availability:'Available'};
orderApp.cards=[...orderExisting,psa10];
const gradeOrder=orderApp.inventoryCustomOrderWithNewCard(psa10);
if(JSON.stringify(gradeOrder)!==JSON.stringify([orderIds[0],orderIds[1],orderIds[2],orderIds[7],orderIds[3],orderIds[4],orderIds[5]])){
  throw new Error('Higher graded Hyper Battle card was not inserted ahead of the lower grade.');
}
console.log('Validated game-aware new-card Inventory insertion.');

const addSource=fs.readFileSync(path.join(root,'src/features/owner/add.js'),'utf8');
if(!addSource.includes('insertNewInventoryCardIntoCustomOrder(saved)')) throw new Error('Add flow is not wired to new-card Custom Order insertion.');
if(insights.includes('2026-09-17-v18-COUNTRY-CARD-DEMAND.sql') || insights.includes('2026-09-24-v08-DISCOVERY-SUMMARY.sql')) throw new Error('Development SQL-help filename leaked into Production Insights.');
if(!insights.includes('salesActionQueueRows') || !insights.includes('What to act on next')) throw new Error('Promoted Owner Insights sales action queue missing.');
const analyticsSource=fs.readFileSync(path.join(root,'src/services/analytics.js'),'utf8');
if(analyticsSource.includes('analytics_test') || analyticsSource.includes('isDevelopmentAnalyticsTestSession')) throw new Error('Development-only analytics test bypass leaked into Production.');
console.log('Validated retained Production behavior and Production-only boundaries.');

const authSource=fs.readFileSync(path.join(root,'src/services/auth.js'),'utf8');
const startupSource=fs.readFileSync(path.join(root,'src/app/startup.js'),'utf8');
const catalogueSource=fs.readFileSync(path.join(root,'src/services/catalogue.js'),'utf8');
const runtimeSource=fs.readFileSync(path.join(root,'src/app/production-runtime.js'),'utf8');
const tilesSource=fs.readFileSync(path.join(root,'src/features/cards/tiles.js'),'utf8');
const postsSource=fs.readFileSync(path.join(root,'src/features/social/posts.js'),'utf8');
const routingSource=fs.readFileSync(path.join(root,'src/app/routing.js'),'utf8');
const applyOwnerModeSource=authSource.slice(authSource.indexOf('function applyOwnerMode()'),authSource.indexOf('function requireOwner('));
if(applyOwnerModeSource.includes('goToRoute("inventory")')) throw new Error('Owner UI application still redirects owner-only routes before auth settles.');
if(!authSource.includes('async function verifyOwnerSessionResult(session)')) throw new Error('Owner verification result helper missing.');
if(!authSource.includes('Owner verification failed; retrying once:')) throw new Error('Transient owner verification retry missing.');
if(!authSource.includes('function openOwnerPostGenerator(mode,cardId)')) throw new Error('Separate-tab owner post generator helper missing.');
if(!startupSource.includes('ownerPostHandoffRequested && !appContext.isOwnerMode()')) throw new Error('Persisted-session-first generator startup guard missing.');
if(!catalogueSource.includes('Secure owner card read failed; retrying once:')) throw new Error('Owner catalogue retry missing.');
if(!runtimeSource.includes('persistSession:true') || !runtimeSource.includes('autoRefreshToken:true')) throw new Error('Explicit Production auth persistence/refresh config missing.');
if(!routingSource.includes('appContext.isOwnerOnlyRoute(route) && !appContext.isOwnerMode()')) throw new Error('Central owner-only route guard missing.');
for(const marker of ['Generate FB Post','Generate Carousell Post','Generate eBay Post']) if(!tilesSource.includes(marker)) throw new Error('Generator quick action missing: '+marker);
if(!postsSource.includes('currentHashParams().get("card")')) throw new Error('Requested generator card preselection missing.');
if(analyticsSource.includes('analytics_test') || startupSource.includes('isDevelopmentAnalyticsTestSession')) throw new Error('Development analytics-test behavior leaked into Production.');
console.log('Validated Production 2026-09-29-v02 owner generator/session promotion.');
const initializer=fs.readFileSync(path.join(root,'src/app/initialize.js'),'utf8');
const policySource=fs.readFileSync(path.join(root,'src/services/contact-intent-policy.js'),'utf8');
const utilitiesSource=fs.readFileSync(path.join(root,'src/features/core/utilities.js'),'utf8');
const enhancementSource=fs.readFileSync(path.join(root,'src/ui/enhancement-2.js'),'utf8');
if(!initializer.includes("export { initializeApp } from './register-features.js?v=2026-09-29-v10'")) throw new Error('Refactored initializer facade missing.');
if((registry.match(/posts\.js\?v=2026-09-29-v12/g)||[]).length!==1) throw new Error('Post Generator module must be registered exactly once.');
if(analyticsSource.includes('function insightContactMetrics(')||analyticsSource.includes('function insightInterestScore(')) throw new Error('Superseded analytics contact scoring returned.');
if(!policySource.includes('function insightContactMetrics(')||!policySource.includes('function insightInterestScore(')) throw new Error('Canonical contact-intent scoring policy missing.');
if(utilitiesSource.includes('appContext.RARITY_LIST =')||utilitiesSource.includes('appContext.INDEX_KEY =')) throw new Error('Removed dead utility state returned.');
if(routingSource.includes('appContext.CARD_IMAGE_TYPES =')) throw new Error('Removed dead routing state returned.');
if(enhancementSource.includes('window.collectOpenContactChooser')||enhancementSource.includes('window.collectCloseContactChooser')) throw new Error('Removed dead contact chooser globals returned.');
if(!fs.existsSync(path.join(root,'src/features/inventory/page-shell.js'))) throw new Error('Refactored Inventory page shell missing.');
if(!fs.existsSync(path.join(root,'src/features/owner/insights-extension-host.js'))) throw new Error('Insights extension host missing.');
for(const rel of ['src/features/social/posts-card-list.js','src/features/social/posts-giveaway.js','src/features/social/posts-marketplace.js']) if(!fs.existsSync(path.join(root,rel))) throw new Error('Split Post Generator module missing: '+rel);
if(fs.readdirSync(path.join(root,'src/styles')).filter(name=>name.endsWith('.css')&&name!=='27-insights-dashboard.css').sort().join(',')!=='01-foundation.css,02-components.css') throw new Error('Legacy global CSS files remain after consolidation.');
console.log('Validated promoted v09 refactor contracts and Production boundaries.');

const imageSource=fs.readFileSync(path.join(root,'src/features/media/images.js'),'utf8');
for(const marker of [
  'function drawWebsiteWatermarkCta(ctx,banner,bannerX,bannerY,scale)',
  'const label="CHECK FULL INVENTORY"',
  'drawWebsiteWatermarkCta(ctx,banner,bannerX,bannerY,scale);',
  'const sourceW=1113;',
  'const sourceH=242;',
  'const qrX=bannerX+885*scale;',
  'const qrY=bannerY+27*scale;',
  'const qrSize=166*scale;'
]){
  if(!imageSource.includes(marker)) throw new Error('Production watermark CTA contract missing: '+marker);
}
if(!registry.includes("images.js?v=2026-09-29-v07")) throw new Error('Production watermark module cache-buster missing.');
if(!html.includes('src/main.js?v=2026-09-29-v10')) throw new Error('Production main cache-buster missing.');
console.log('Validated retained Production CHECK FULL INVENTORY watermark CTA contract.');
const cardListSource=fs.readFileSync(path.join(root,'src/features/social/posts-card-list.js'),'utf8');
if(!cardListSource.includes('`${text.cardList}  [${prefs.language==="en"?"UPDATE":"更新"} : ${appContext.fbCardListDateLabel()}]`')) throw new Error('Production v08 Card List heading order missing.');
if(!cardListSource.includes('`${cardListGameTitle(availableCards)} WTS【CARD LIST】')) throw new Error('Production v08 Card List WTS Game placement missing.');
if(!cardListSource.includes('`${cardListGameTitle(cards)} ${text.cardDrop} ·')) throw new Error('Production v08 Card Drop Game-first behavior changed.');
console.log('Validated Production 2026-09-29-v08 Card List title-order promotion.');



if(!tilesSource.includes('if(status==="Sold") candidate.sold_at=new Date().toISOString();')) throw new Error('Production v09 Mark Sold click timestamp missing.');
if(!tilesSource.includes('else candidate.sold_at=null;')) throw new Error('Production v09 non-Sold sold_at clear behavior missing.');
if(!registry.includes("tiles.js?v=2026-09-29-v09-sold-date")) throw new Error('Production v09 Mark Sold tiles cache-buster missing.');
if(!mainSource.includes("register-features.js?v=2026-09-29-v10") || !mainSource.includes("initialize.js?v=2026-09-29-v10")) throw new Error('Production v09 application cache chain missing.');
console.log('Validated Production 2026-09-29-v09 Mark Sold click timestamp contract.');

if(!registry.includes("posts.js?v=2026-09-29-v14")) throw new Error('Production v10 posts cache-buster missing.');
const marketplaceSource=fs.readFileSync(path.join(root,'src/features/social/posts-marketplace.js'),'utf8');
if(!postsSource.includes('posts-marketplace.js?v=2026-09-29-v14')) throw new Error('Production v10 marketplace cache-buster missing.');
if(!marketplaceSource.includes('id="ebayPrepareListing" disabled>Prepare eBay Listing</button>')) throw new Error('Production v10 Prepare eBay Listing button missing.');
if(!marketplaceSource.includes('requireOwner("prepare eBay listing")')) throw new Error('Production v10 eBay prepare owner guard missing.');
if(!marketplaceSource.includes('copyPlainText(fullListingText(),"eBay listing copied")')) throw new Error('Production v10 eBay prepare copy step missing.');
if(!marketplaceSource.includes('downloadSingleCardImagesZip(selected,(done,total)=>{prepareListing.textContent=')) throw new Error('Production v10 eBay prepare ZIP step missing.');
console.log('Validated Production 2026-09-29-v10 Prepare eBay Listing contract.');
