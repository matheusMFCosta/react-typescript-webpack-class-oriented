import { Operation } from "./../utils/functions";
import { Button1, Button2, Button3, Form1, simpleExplanation } from "./app";

const simpleExplanationInitialState: simpleExplanation = {
    actionValue: ""
};

const button1InitialState: Button1 = {
    buttonStatus: true
};

const button2InitialState: Button2 = {
    buttonStatus: true
};

const button3InitialState: Button3 = {
    buttonStatus: true
};

const form1InitialState: Form1 = {
    inputvalue: "",
    errorMessage: "",
    savedValue: ""
};

/* ----------simpleExplanationReducer --------------*/
export const simpleExplanationReducer = (state: simpleExplanation = simpleExplanationInitialState, action) => {
    if (action.simpleExplanationReducer) {
        return action.simpleExplanationReducer(state);
    }
    return state;
};

/* ----------BUTTON 1 --------------*/
export const button1Reducer = (state: Button1 = button1InitialState, action) => {
    if (action.button1Reducer) {
        return action.button1Reducer(state);
    }
    return state;
};

/* ----------BUTTON 2 --------------*/
export const button2Reducer = (state: Button2 = button2InitialState, action) => {
    if (action.button2Reducer) {
        return action.button2Reducer(state);
    }
    return state;
};

/* ----------BUTTON 3 --------------*/
export const button3Reducer = (state: Button3 = button3InitialState, action) => {
    if (action.button3Reducer) {
        return action.button3Reducer(state);
    }
    return state;
};

export const form1Reducer = (state: Form1 = form1InitialState, action) => {
    if (action.form1Reducer) {
        return action.form1Reducer(state);
    }
    return state;
};
