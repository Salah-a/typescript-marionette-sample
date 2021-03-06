﻿//Author: Salah Abuzaid
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

class UserResultItemView extends Marionette.ItemView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#userResultsItemViewTemplate";
        options.tagName = "tr";
        options.events = {
            "click .btnEdit": "editButtonClicked",
            "click .btnSave": "saveButtonClicked",
        }
        super(options);

    }
    editButtonClicked() {
        this.trigger("btnEdit:clicked", this.model);
    }
    saveButtonClicked() {
        this.trigger("btnSave:clicked", this.model);
    }
}

class UserResultsView extends Marionette.CompositeView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#userResultsCollectionViewTemplate";
        options.tagName = "table";
        options.className = "table table-hover"; 
        options.itemViewContainer = "tbody"; 
        super(options);
        this.itemView = UserResultItemView; 
    }
}



