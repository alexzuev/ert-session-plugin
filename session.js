chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.method === 'GET' && !details.url.match(/idleTime=1$/gi)) {
            return { redirectUrl: details.url.replace(/idleTime=\d+/gi, 'idleTime=1') };
        }
    },
    {
        urls: ["*://*.ert.com/*/api/v1/sessions/check?idleTime=*"]
    },
    ["blocking"]);