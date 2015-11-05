/// <reference path='../../common/typescript/BrowserInterface.ts'/>
/// <reference path='../../common/typescript/BrowserAbstract.ts'/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BrowserChrome = (function (_super) {
    __extends(BrowserChrome, _super);
    function BrowserChrome() {
        _super.call(this);
        this.getCurrentData();
    }
    /**
     *
     */
    BrowserChrome.prototype.getCurrentData = function () {
        this.evaluate("(function() {" +
            "   var sfToolBar = window.document.getElementsByClassName('sf-toolbar');" +
            "   var url = sfToolBar[0].getAttribute('data-sfurl');" +
            "   return [url, window.location];" +
            "})();", function (response, isException) {
            console.log(this);
        });
    };
    BrowserChrome.prototype.getProfilerId = function () {
        return undefined;
    };
    BrowserChrome.prototype.getAjaxRequests = function () {
        return undefined;
    };
    BrowserChrome.prototype.initRefresh = function () {
    };
    BrowserChrome.prototype.getInspectedWindow = function () {
        return chrome.devtools.inspectedWindow;
    };
    /**
     * Evaluating code
     *
     * @param code
     * @param callable
     */
    BrowserChrome.prototype.evaluate = function (code, callable) {
        this.getInspectedWindow().eval(code, callable);
    };
    return BrowserChrome;
})(BrowserAbstract);
//# sourceMappingURL=BrowserChrome.js.map