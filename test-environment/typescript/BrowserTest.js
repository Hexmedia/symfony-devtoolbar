/// <reference path='../../common/typescript/BrowserInterface.ts'/>
/// <reference path='../../common/typescript/BrowserAbstract.ts'/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 */
var BrowserTest = (function (_super) {
    __extends(BrowserTest, _super);
    function BrowserTest() {
        _super.apply(this, arguments);
    }
    BrowserTest.prototype.getProfilerId = function () {
        return "b16935";
    };
    BrowserTest.prototype.getWindowLocation = function () {
        return "http://";
    };
    BrowserTest.prototype.getAjaxRequests = function () {
        return [
            "00efe6",
            "b16935"
        ];
    };
    BrowserTest.prototype.initRefresh = function () {
        return this.getAjaxRequestS();
    };
    BrowserTest.prototype.getInspectedWindow = function () {
        return undefined;
    };
    return BrowserTest;
})(BrowserAbstract);
//# sourceMappingURL=BrowserTest.js.map