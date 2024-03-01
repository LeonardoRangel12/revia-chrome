chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    const res = await chrome.tabs.executeScript(tabId, { file: "content.js" });
  }
});
