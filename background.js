const adWebsites = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.admedia.com/*",
    "*://admedia.com/*",
    "*://animoto.com/*",
    "*://*.animoto.com/*",
    "*://genero.com/*",
    "*://*.genero.com/*",
    "*://jemsu.com/*",
    "*://*.jemsu.com/*",
    "*://kaizend.com/*",
    "*://*.kaizend.com/*",
    "*://kazam.com/*",
    "*://*.kazam.com/*",
    "*://powtoon.com/*",
    "*://*.powtoon.com/*",
    "*://quickframe.com/*",
    "*://*.quickframe.com/*",
    "*://shuttlerock.com/*",
    "*://*.shuttlerock.com/*",
    "*://lh6.googleusercontent.com/*",
    "*://*.lh6.googleusercontent.com/*"
]   

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { cancel: true };
    },
    {
        urls: adWebsites
    },
    ["blocking"]
)