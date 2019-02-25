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
var TestUserModel = (function (_super) {
    __extends(TestUserModel, _super);
    function TestUserModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TestUserModel.prototype, "alias", {
        get: function () { return this.get('alias'); },
        set: function (value) { this.set('alias', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestUserModel.prototype, "realName", {
        get: function () { return this.get('realName'); },
        set: function (value) { this.set('realName', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestUserModel.prototype, "wins", {
        get: function () { return this.get('wins'); },
        set: function (value) { this.set('wins', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestUserModel.prototype, "losses", {
        get: function () { return this.get('losses'); },
        set: function (value) { this.set('losses', value); },
        enumerable: true,
        configurable: true
    });
    return TestUserModel;
}(Backbone.Model));
var TestUserCollection = (function (_super) {
    __extends(TestUserCollection, _super);
    function TestUserCollection(options) {
        var _this = _super.call(this, options) || this;
        _this.model = TestUserModel;
        _this.url = "https://csunix.mohawkcollege.ca/~000348604/android_connect/get_all_gameuserresults.php";
        _this.parse = function (data) {
            console.log('break here');
            return data.gameuserresults;
        };
        return _this;
    }
    return TestUserCollection;
}(Backbone.Collection));
//# sourceMappingURL=UserResultModels.js.map