chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
    console.log(msg, _, sendResponse)
})

function init() {
    let temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL('js/tools.js');
    temp.onload = function () {
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
    chrome.runtime.sendMessage({event: 'initAction'});
}

init()