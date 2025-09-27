chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: "https://anura.pro/",
    type: "popup",
    width: 1000,
    height: 700
  });
});
