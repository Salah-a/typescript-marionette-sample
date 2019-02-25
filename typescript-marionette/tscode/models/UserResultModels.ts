/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

interface IRoundScore {
    RoundNumber?: number;
    TotalPoints?: number;
}

interface IUserModel {
    UserName?: string;
    RealName?: string;
    RoundScores?: IRoundScore[];
    RoundScoreCollection?: RoundScoreCollection;
}

interface ITestUserModel {
    realName: string;
    alias: string;
    wins?: number;
    losses?: number;
}


class RoundScore extends Backbone.Model implements IRoundScore {
    get RoundNumber(): number { return this.get('RoundNumber'); }
    set RoundNumber(value: number) { this.set('RoundNumber', value); }

    get TotalPoints(): number { return this.get('TotalPoints'); }
    set TotalPoints(value: number) { this.set('TotalPoints', value); }

    constructor(input: IRoundScore) {
        super();
        for (var key in input) {
            if (key) { this[key] = input[key]; }

        }
    }
}

class UserModel extends Backbone.Model implements IUserModel {
    get UserName(): string { return this.get('UserName'); }
    set UserName(value: string) { this.set('UserName', value); }

    get RealName(): string { return this.get('RealName'); }
    set RealName(value: string) { this.set('RealName', value); }

    get RoundScores(): IRoundScore[] { return this.get('RoundScores'); }
    set RoundScores(value: IRoundScore[]) { this.set('RoundScores', value); }

    get RoundScoreCollection(): RoundScoreCollection { return new RoundScoreCollection( this.get('RoundScores')); }
    set RoundScoreCollection(value: RoundScoreCollection) {  }

    constructor(input: IRoundScore) {
        super();
        for (var key in input) {
            if (key) { this[key] = input[key]; }

        }
    }
}

class UserResultCollection extends Backbone.Collection {
    constructor(options?: any) {
        super(options);
        this.model = UserModel;
        this.url = "/api/results";
    }
}

class RoundScoreCollection extends Backbone.Collection {
    constructor(options?: any) {
        super(options);
        this.model = RoundScore;
    }
}


class TestUserModel extends Backbone.Model implements ITestUserModel {
    get alias(): string { return this.get('alias'); }
    set alias(value: string) { this.set('alias', value); }

    get realName(): string { return this.get('realName'); }
    set realName(value: string) { this.set('realName', value); }

    get wins(): number { return this.get('wins'); }
    set wins(value: number) { this.set('wins', value); }

    get losses(): number { return this.get('losses'); }
    set losses(value: number) { this.set('losses', value); }
}
class TestUserCollection extends Backbone.Collection {
    constructor(options?: any) {
        super(options);
        this.model = TestUserModel;
        this.url = "https://csunix.mohawkcollege.ca/~000348604/android_connect/get_all_gameuserresults.php";
        this.parse = (data) => {
            console.log('break here');
            return data.gameuserresults;
        }

        }
    }
