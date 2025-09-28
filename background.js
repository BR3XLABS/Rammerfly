chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: "https://browser.rammerhead.org/",
    type: "popup",
    width: 1000,
    height: 700
  });
});
