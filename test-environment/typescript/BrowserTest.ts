/// <reference path='../../common/typescript/BrowserInterface.ts'/>
/// <reference path='../../common/typescript/BrowserAbstract.ts'/>

/**
 *
 */
class BrowserTest extends BrowserAbstract implements BrowserInterface {
    getProfilerId() : string {
        return "b16935";
    }

    getWindowLocation() : string {
        return "http://";
    }

    getAjaxRequests() : string[] {
        return [
            "00efe6",
            "b16935"
        ];
    }

    initRefresh() : void {
        return this.getAjaxRequestS();
    }

    getInspectedWindow() : Object {
        return undefined;
    }
}
