import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { button1Reducer, button2Reducer, button3Reducer, form1Reducer, simpleExplanationReducer } from "../app/reducers";

export const rootReducer = combineReducers({
    simple: simpleExplanationReducer,
    button1: button1Reducer,
    button2: button2Reducer,
    button3: button3Reducer,
    form1: form1Reducer,
    routing: routerReducer
});

/*----------- aplications reducers types ------------- */
import { Button1, Button2, Button3, Form1 } from "./../app/app";

export interface appStateTypings {
    routing: any;
    button1: Button1;
    button2: Button2;
    button3: Button3;
    form1: Form1;
}
