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
var NavBarButtonModel = (function (_super) {
    __extends(NavBarButtonModel, _super);
    function NavBarButtonModel(input) {
        var _this = _super.call(this) || this;
        for (var key in input) {
            if (key) {
                _this[key] = input[key];
            }
        }
        return _this;
    }
    Object.defineProperty(NavBarButtonModel.prototype, "Name", {
        get: function () { return this.get('Name'); },
        set: function (value) { this.set('Name', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavBarButtonModel.prototype, "Id", {
        get: function () { return this.get('Id'); },
        set: function (value) { this.set('Id', value); },
        enumerable: true,
        configurable: true
    });
    return NavBarButtonModel;
}(Backbone.Model));
//# sourceMappingURL=NavBarButtonModel.js.map