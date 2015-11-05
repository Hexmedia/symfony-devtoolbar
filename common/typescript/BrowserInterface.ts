interface BrowserInterface {
    getProfilerId() : string;
    getWindowLocation() : string;
    getAjaxRequests() : string[];
    initRefresh() : void;
    getInspectedWindow() : Object;
}