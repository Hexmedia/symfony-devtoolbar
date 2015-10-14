var url = "http://making-wild-eyes.dev/app_dev.php/_profiler/4194ea";

var content = document.getElementById( 'content' );

content.innerHTML = '<iframe id="iframe" src="/panel/loading.html"></iframe>';

window.onresize = recalculateIframeHeight;

/**
 *
 */
function recalculateIframeHeight() {
    var iframe = document.getElementById( 'iframe' );

    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    iframe.setAttribute( 'style', 'height: ' + height + 'px' );
}

recalculateIframeHeight();

var currentUrl = null;

function checkSfResponse() {
    chrome.devtools.inspectedWindow.eval(
        "(function() {" +
        "   var sfToolBar = window.document.getElementsByClassName('sf-toolbar');" +
        "   var url = sfToolBar[0].getAttribute('data-sfurl');" +
        "   return [url, window.location];" +
        "})();",
        /**
         * @param {string}  result
         * @param {boolean} isException
         */
        function ( result, isException ) {
            if (!isException) {
                var url = result[0];
                var location = result[1];

                if (null !== url) {

                    var iframe = document.getElementById( 'iframe' );

                    url = url.replace( "_wdt", "_profiler" );

                    if (currentUrl !== url) {
                        iframe.src = location.protocol + "//" + location.hostname + url;
                        currentUrl = url;
                    }
                }
            }
        }
    );
}

checkSfResponse();

//TODO: Currently I do not have any idea how to do it better, but this is not good way:)
chrome.devtools.network.onRequestFinished.addListener( function () {
    setTimeout( checkSfResponse, 100 );
});
l
