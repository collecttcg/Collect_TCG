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
  'Latest Production: `2026-09-27-v01`',
  'Latest Beta: `2026-09-26-v20`',
  'Beta promoted from for Production `2026-09-27-v01`: none',
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

console.log(`Checked ${jsCount} JavaScript files, imports, HTML assets, migrations and Production structure.`);
