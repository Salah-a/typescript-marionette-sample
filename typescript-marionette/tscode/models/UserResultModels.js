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
var RoundScore = (function (_super) {
    __extends(RoundScore, _super);
    function RoundScore(input) {
        var _this = _super.call(this) || this;
        for (var key in input) {
            if (key) {
                _this[key] = input[key];
            }
        }
        return _this;
    }
    Object.defineProperty(RoundScore.prototype, "RoundNumber", {
        get: function () { return this.get('RoundNumber'); },
        set: function (value) { this.set('RoundNumber', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundScore.prototype, "TotalPoints", {
        get: function () { return this.get('TotalPoints'); },
        set: function (value) { this.set('TotalPoints', value); },
        enumerable: true,
        configurable: true
    });
    return RoundScore;
}(Backbone.Model));
var UserModel = (function (_super) {
    __extends(UserModel, _super);
    function UserModel(input) {
        var _this = _super.call(this) || this;
        for (var key in input) {
            if (key) {
                _this[key] = input[key];
            }
        }
        return _this;
    }
    Object.defineProperty(UserModel.prototype, "UserName", {
        get: function () { return this.get('UserName'); },
        set: function (value) { this.set('UserName', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "RealName", {
        get: function () { return this.get('RealName'); },
        set: function (value) { this.set('RealName', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "RoundScores", {
        get: function () { return this.get('RoundScores'); },
        set: function (value) { this.set('RoundScores', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "RoundScoreCollection", {
        get: function () { return new RoundScoreCollection(this.get('RoundScores')); },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}(Backbone.Model));
var UserResultCollection = (function (_super) {
    __extends(UserResultCollection, _super);
    function UserResultCollection(options) {
        var _this = _super.call(this, options) || this;
        _this.model = UserModel;
        _this.url = "/api/results";
        return _this;
    }
    return UserResultCollection;
}(Backbone.Collection));
var RoundScoreCollection = (function (_super) {
    __extends(RoundScoreCollection, _super);
    function RoundScoreCollection(options) {
        var _this = _super.call(this, options) || this;
        _this.model = RoundScore;
        return _this;
    }
    return RoundScoreCollection;
}(Backbone.Collection));
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