chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#ddd'}, function() {
      console.log("Up and running");
    });
  });