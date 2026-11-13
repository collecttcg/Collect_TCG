/** Production: include saved eBay listing URLs in Facebook sales posts.
 * The link must be appended independently of the card-details URL,
 * since Sold cards display their USD price in place of that URL.
 */
export function register(appContext){
  const originalBuildFbPostText=appContext.buildFbPostText;
  if(typeof originalBuildFbPostText!=="function") return;

  appContext.buildFbPostText=function(card,values){
    const post=originalBuildFbPostText(card,values);
    if(!post || !card) return post;

    const ebayUrl=typeof appContext.normalizeEbayListingUrl==="function"
      ? appContext.normalizeEbayListingUrl(card.ebay_url||"")
      : "";
    if(!ebayUrl) return post;

    const separator="━━━━━━━━━━━━━━━━━━━━━━━━";
    const marker=post.indexOf("\n"+separator);
    if(marker<0) return post+"\n\n🛒 eBay Listing:\n"+ebayUrl;
    return post.slice(0,marker)+"\n\n🛒 eBay Listing:\n"+ebayUrl+post.slice(marker);
  };
}
