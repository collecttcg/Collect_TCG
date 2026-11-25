import assert from 'node:assert/strict';
import test from 'node:test';

test('Card Details post actions follow the active card, lifecycle, and Owner mode',async()=>{
  const {register}=await import('../src/features/cards/details.js');
  const originalDocument=globalThis.document;
  const items=[];
  const launches=[];
  let owner=true;
  let card={id:'A',lifecycle:'live'};
  const clone={focus(){}};
  const menu={
    hidden:true,
    querySelectorAll:()=>[...items],
    querySelector:selector=>selector==='#detailsCloneBtn'?clone:items[0]||clone,
    insertBefore:(item,before)=>{assert.equal(before,clone);items.push(item);}
  };
  const context={
    detailsMoreMenuEl:menu,
    detailsCardId:'A',
    $:()=>({setAttribute(){}}),
    isOwnerMode:()=>owner,
    requireOwner:()=>owner,
    getCardById:id=>card.id===id?card:null,
    cardLifecycle:item=>item.lifecycle,
    isLiveLifecycle:item=>item.lifecycle==='live',
    openOwnerPostGenerator:(mode,id)=>launches.push([mode,id])
  };
  globalThis.document={createElement:()=>({
    dataset:{},
    setAttribute(){},
    focus(){},
    addEventListener(_type,listener){this.click=listener;},
    remove(){items.splice(items.indexOf(this),1);}
  })};
  try{
    register(context);
    context.toggleDetailsMoreMenu();
    assert.deepEqual(items.map(item=>item.textContent),['Generate FB Post','Generate Carousell Post','Generate eBay Post']);
    items.forEach(item=>item.click());
    assert.deepEqual(launches,[['single','A'],['carousell','A'],['ebay','A']]);
    const staleButton=items[0];
    owner=false;
    staleButton.click();
    assert.equal(launches.length,3);
    context.toggleDetailsMoreMenu();
    context.toggleDetailsMoreMenu();
    assert.equal(items.length,0);
    owner=true;
    card={id:'B',lifecycle:'archived'};
    context.detailsCardId='B';
    context.toggleDetailsMoreMenu();
    context.toggleDetailsMoreMenu();
    assert.deepEqual(items.map(item=>item.dataset.detailsPost),['single']);
    staleButton.click();
    items[0].click();
    assert.deepEqual(launches.slice(3),[['single','B']]);
  }finally{
    if(originalDocument===undefined) delete globalThis.document;
    else globalThis.document=originalDocument;
  }
});
