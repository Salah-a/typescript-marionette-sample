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
        super(options);
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



