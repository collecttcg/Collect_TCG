import fs from 'node:fs';

const workflow=fs.readFileSync('.github/workflows/production-seo.yml','utf8');
if(/grep[^\n]*\?v=20\d{2}-/.test(workflow)){
  throw new Error('Production SEO workflow contains a release-specific cache-version assertion.');
}
for(const marker of ['RELEASE_VERSION','PREVIOUS_VERSION','release-manifests/']){
  if(workflow.includes(marker)) throw new Error(`Production SEO workflow is coupled to release state: ${marker}`);
}
console.log('Production SEO workflow is release-agnostic.');
