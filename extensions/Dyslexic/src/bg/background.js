// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.browserAction.onClicked.addListener(browserListener);


  var browserListener = function(tab) {
    var regexPage = new RegExp(/https:\/\/www.web.b.ebscohost.com\//); // We use a regular expresion to check which page was given.
    var match = regexPage.exec(tab.url); // We then check if the given page matches our expression.
    // If it matches and the status of the tab is complete...
    if(match && tab.status === 'complete') {
        //We insert the css
        chrome.tabs.insertCSS(tab.id, {
            file: "/inject/inject.css"
        });
    }
}