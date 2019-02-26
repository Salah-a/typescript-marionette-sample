//Author: Salah Abuzaid
/**
 *TODO: Add save functionality & Validation
 *TODO: Setup controller
 *TODO: Add edit & add functionality
 */
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../Scripts/typings/marionette/marionette.d.ts"/>
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
var MarionetteApp = (function (_super) {
    __extends(MarionetteApp, _super);
    function MarionetteApp() {
        var _this = _super.call(this) || this;
        _this.on("initialize:after", _this.initializeAfter);
        _this.addRegions({ navbarRegion: "#navbarRegion" });
        _this.addRegions({ userResultRegion: "#userResultRegion" }); // new region
        return _this;
    }
    MarionetteApp.prototype.initializeAfter = function () {
        var navBarButtonCollection = new NavBarButtonCollection([
            { Name: "Home", Id: 1 },
            { Name: "About", Id: 2 },
            { Name: "Contact Us", Id: 3 }
        ]);
        var navBarView = new NavBarCollectionView({ collection: navBarButtonCollection });
        navBarView.on("itemview:navbar:clicked", this.navBarButtonClicked);
        this.navbarRegion.show(navBarView);
        var userResultCollection = new UserCollection();
        userResultCollection.fetch();
        var userResultCollectionView = new UserResultsView({ collection: userResultCollection });
        userResultCollectionView.on("itemview:btnEdit:clicked", this.editButtonClicked);
        userResultCollectionView.on("itemview:btnSave:clicked", this.saveButtonClicked);
        this.userResultRegion.show(userResultCollectionView);
    };
    MarionetteApp.prototype.navBarButtonClicked = function (itemView, buttonId) {
        alert('Marionette.App handled NavBarItemView clicked with id :' + buttonId);
    };
    MarionetteApp.prototype.editButtonClicked = function (itemView) {
        console.log('break here');
        itemView.options.template = "#editUserResultsItemViewTemplate";
        itemView.render();
    };
    MarionetteApp.prototype.saveButtonClicked = function (itemView) {
        console.log('break here');
        itemView.options.template = "#userResultsItemViewTemplate";
        itemView.render();
    };
    return MarionetteApp;
}(Marionette.Application));
//# sourceMappingURL=MarionetteApp.js.map