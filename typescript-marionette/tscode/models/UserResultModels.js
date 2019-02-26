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
var UserModel = (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UserModel.prototype, "alias", {
        get: function () { return this.get('alias'); },
        set: function (value) { this.set('alias', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "realName", {
        get: function () { return this.get('realName'); },
        set: function (value) { this.set('realName', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "wins", {
        get: function () { return this.get('wins'); },
        set: function (value) { this.set('wins', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "losses", {
        get: function () { return this.get('losses'); },
        set: function (value) { this.set('losses', value); },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}(Backbone.Model));
var UserCollection = (function (_super) {
    __extends(UserCollection, _super);
    function UserCollection(options) {
        var _this = _super.call(this, options) || this;
        _this.model = UserModel;
        _this.url = "https://csunix.mohawkcollege.ca/~000348604/android_connect/get_all_gameuserresults.php";
        _this.parse = function (data) {
            console.log('break here');
            return data.gameuserresults;
        };
        return _this;
    }
    return UserCollection;
}(Backbone.Collection));
//# sourceMappingURL=UserResultModels.js.map