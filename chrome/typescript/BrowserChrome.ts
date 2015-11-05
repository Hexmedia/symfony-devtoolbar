/// <reference path='../../common/typescript/BrowserInterface.ts'/>
/// <reference path='../../common/typescript/BrowserAbstract.ts'/>

class BrowserChrome extends BrowserAbstract implements BrowserInterface {
    profileId:string;
    windowLocation:Object;

    constructor():void {
        super();
        this.getCurrentData();
    }

    /**
     *
     */
    getCurrentData():void {
        this.evaluate(
            "(function() {" +
            "   var sfToolBar = window.document.getElementsByClassName('sf-toolbar');" +
            "   var url = sfToolBar[0].getAttribute('data-sfurl');" +
            "   return [url, window.location];" +
            "})();",
            function (response, isException) {
                console.log(this);
            }
        );
    }


    getProfilerId():string {
        return undefined;
    }

    getAjaxRequests():string[] {
        return undefined;
    }

    initRefresh():void {
    }

    getInspectedWindow():Object {
        return chrome.devtools.inspectedWindow;
    }

    /**
     * Evaluating code
     *
     * @param code
     * @param callable
     */
    evaluate(code:string, callable:Function):any {
        this.getInspectedWindow().eval(code, callable);
    }
}

