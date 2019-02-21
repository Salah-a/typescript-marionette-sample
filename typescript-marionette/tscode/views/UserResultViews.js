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
var UserResultsView = (function (_super) {
    __extends(UserResultsView, _super);
    function UserResultsView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#userResultsViewTemplate";
        options.tagName = "table";
        options.className = "table table-hover";
        options.itemViewContainer = "tbody";
        _this = _super.call(this, options) || this;
        _this.itemView = UserResultItemView;
        return _this;
    }
    return UserResultsView;
}(Marionette.CompositeView));
var UserResultItemView = (function (_super) {
    __extends(UserResultItemView, _super);
    function UserResultItemView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#userResultItemViewTemplate";
        options.tagName = "tr";
        _this = _super.call(this, options) || this;
        _this.itemView = ResultItemView;
        _this.collection = new RoundScoreCollection(options.model.RoundScores);
        return _this;
    }
    return UserResultItemView;
}(Marionette.CompositeView));
var ResultItemView = (function (_super) {
    __extends(ResultItemView, _super);
    function ResultItemView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#resultItemViewTemplate";
        options.tagName = "td";
        _this = _super.call(this, options) || this;
        return _this;
    }
    return ResultItemView;
}(Marionette.ItemView));
var TestUserResultItemView = (function (_super) {
    __extends(TestUserResultItemView, _super);
    function TestUserResultItemView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#testUserResultsItemViewTemplate";
        options.tagName = "tr";
        _this = _super.call(this, options) || this;
        return _this;
    }
    return TestUserResultItemView;
}(Marionette.ItemView));
var TestUserResultsView = (function (_super) {
    __extends(TestUserResultsView, _super);
    function TestUserResultsView(options) {
        var _this = this;
        if (!options)
            options = {};
        options.template = "#testUserResultsCollectionViewTemplate";
        options.tagName = "table";
        options.className = "table table-hover";
        options.itemViewContainer = "tbody";
        _this = _super.call(this, options) || this;
        _this.itemView = TestUserResultItemView;
        return _this;
    }
    return TestUserResultsView;
}(Marionette.CompositeView));
//# sourceMappingURL=UserResultViews.js.map