﻿//Author: Salah Abuzaid
/**
 *TODO: Add save functionality & Validation
 *TODO: Setup controller
 *TODO: Add edit & add functionality
 */
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../Scripts/typings/marionette/marionette.d.ts"/>

class MarionetteApp extends Marionette.Application {
    navbarRegion: Marionette.Region;
    userResultRegion: Marionette.Region; 
    constructor() {
        super();
        this.on("initialize:after", this.initializeAfter);
        this.addRegions({ navbarRegion: "#navbarRegion" });
        this.addRegions({ userResultRegion: "#userResultRegion" }); // new region
    }
    initializeAfter() {
        var navBarButtonCollection: NavBarButtonCollection = new NavBarButtonCollection(
            [
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
        
        
    }
    navBarButtonClicked(itemView: Marionette.ItemView, buttonId: number) {
        alert('Marionette.App handled NavBarItemView clicked with id :' + buttonId);
    }
    editButtonClicked(itemView: Marionette.ItemView) {
        console.log('break here');
        itemView.options.template = "#editUserResultsItemViewTemplate";
        itemView.render();
    }
    saveButtonClicked(itemView: Marionette.ItemView) {
        console.log('break here');
        itemView.options.template = "#userResultsItemViewTemplate";
        itemView.render();
    }
}