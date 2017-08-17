import { App } from "./app";
import { Operation, assign } from "./../utils/functions";

export enum appActionsName {
    INIT_APP = "INIT_APP"
}

export class appInit implements Operation {
    public type: string = appActionsName.INIT_APP;

    constructor(public payload: boolean) {}

    //validate() {}

    public Reduce(state: App): App {
        return assign(state, { init: this.payload });
    }

    //process() {}
}

export const appActions = {
    appInit
};
