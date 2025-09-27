chrome.action.onClicked.addListener(function(tab) {
    chrome.windows.create({
        url: 'https://nomore.br3xality.org/',
        type: 'popup',
        width: 978,
        height: 550
    });
});
