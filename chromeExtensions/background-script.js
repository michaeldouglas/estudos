//Executa o plugin apenas quando estiver na página do WMDirect
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlContains: 'wmdirect.com.br' },
                }) ],
            actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }]);
    });
});

//Open tab
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'video') {
        chrome.tabs.create({
            url: chrome.extension.getURL('video.html?video='+request.urlVideo),
            active: false
        }, function(tab) {
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true
            });
        });
    }
});
//
// function setPassword(password) {
//     // Do something, eg..:
//     console.log(password);
// };