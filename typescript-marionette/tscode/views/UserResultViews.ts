/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

class TestUserResultItemView extends Marionette.ItemView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#testUserResultsItemViewTemplate";
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

class TestUserResultsView extends Marionette.CompositeView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#testUserResultsCollectionViewTemplate";
        options.tagName = "table";
        options.className = "table table-hover"; 
        options.itemViewContainer = "tbody"; 
        super(options);
        this.itemView = TestUserResultItemView; 
    }
}



