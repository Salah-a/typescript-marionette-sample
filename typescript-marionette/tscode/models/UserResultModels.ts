//Author: Salah Abuzaid
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

interface IUserModel {
    realName: string;
    alias: string;
    wins?: number;
    losses?: number;
}

class UserModel extends Backbone.Model implements IUserModel {
    get alias(): string { return this.get('alias'); }
    set alias(value: string) { this.set('alias', value); }

    get realName(): string { return this.get('realName'); }
    set realName(value: string) { this.set('realName', value); }

    get wins(): number { return this.get('wins'); }
    set wins(value: number) { this.set('wins', value); }

    get losses(): number { return this.get('losses'); }
    set losses(value: number) { this.set('losses', value); }

   
}
class UserCollection extends Backbone.Collection {
    constructor(options?: any) {
        super(options);
        this.model = UserModel;
        this.url = "https://csunix.mohawkcollege.ca/~000348604/android_connect/get_all_gameuserresults.php";
        this.parse = (data) => {
            console.log('break here');
            return data.gameuserresults;
        }

        }
    }
