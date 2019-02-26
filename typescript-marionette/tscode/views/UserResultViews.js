//Author: Salah Abuzaid
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
var UserResultItemView = (function (_super) {
    __extends(UserResultItemView, _super);
    function UserResultItemView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#userResultsItemViewTemplate";
        options.tagName = "tr";
        options.events = {
            "click .btnEdit": "editButtonClicked",
            "click .btnSave": "saveButtonClicked",
        };
        _this = _super.call(this, options) || this;
        return _this;
    }
    UserResultItemView.prototype.editButtonClicked = function () {
        this.trigger("btnEdit:clicked", this.model);
    };
    UserResultItemView.prototype.saveButtonClicked = function () {
        this.trigger("btnSave:clicked", this.model);
    };
    return UserResultItemView;
}(Marionette.ItemView));
var UserResultsView = (function (_super) {
    __extends(UserResultsView, _super);
    function UserResultsView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#userResultsCollectionViewTemplate";
        options.tagName = "table";
        options.className = "table table-hover";
        options.itemViewContainer = "tbody";
        _this = _super.call(this, options) || this;
        _this.itemView = UserResultItemView;
        return _this;
    }
    return UserResultsView;
}(Marionette.CompositeView));
//# sourceMappingURL=UserResultViews.js.map