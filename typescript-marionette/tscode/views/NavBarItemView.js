/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 
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
var NavBarItemView = (function (_super) {
    __extends(NavBarItemView, _super);
    function NavBarItemView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#navBarItemViewTemplate";
        options.className = "btn btn-primary";
        options.events = { "click": "onClickEvent" };
        _this = _super.call(this, options) || this;
        return _this;
    }
    NavBarItemView.prototype.onClickEvent = function () {
        this.trigger("navbar:clicked", this.model.get('Id'));
    };
    return NavBarItemView;
}(Marionette.ItemView));
//# sourceMappingURL=NavBarItemView.js.map