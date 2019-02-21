/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 
/// <reference path="./NavBarButtonModel.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NavBarButtonCollection = (function (_super) {
    __extends(NavBarButtonCollection, _super);
    function NavBarButtonCollection(options) {
        var _this = _super.call(this, options) || this;
        _this.model = NavBarButtonModel;
        _this.url = "/api/navbars";
        return _this;
    }
    return NavBarButtonCollection;
}(Backbone.Collection));
//# sourceMappingURL=NavBarButtonCollection.js.map