chrome.runtime.onStartup.addListener(function() {
    chrome.tabs.create({ url: "https://www.google.com" });
});
