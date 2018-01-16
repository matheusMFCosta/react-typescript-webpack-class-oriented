import { Operation, assign, actionTypeDecorator } from "./../utils/functions";
import { Button1, Button2, Button3, Form1, simpleExplanation } from "./app";

//---------------- Simple Explanation -------------------//



export class rawAction extends Operation {}


export class payloadAction extends Operation {
    constructor(public payload: string) {
        super()
    }
}

export class changeReducerAction extends Operation {
    constructor(public payload: string) {
        super()
    }

    public simpleExplanationReducer(state: simpleExplanation): simpleExplanation {
        return assign(state, { actionValue: this.payload });
    }
}

//---------------- Toogle Buttons -------------------//
export class toogleButton1 extends Operation {

    public button1Reducer(state: Button1): Button1 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }
}

export class toogleButton2 extends Operation {

    public button1Reducer(state: Button2): Button2 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }

    public button2Reducer(state: Button2): Button2 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }
}

export class toogleButton3 extends Operation {
    public button3Reducer(state: Button3): Button3 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }

    process({ getState, action }, dispatch, done) {
        setTimeout(() => {
            dispatch(new toogleButton3Success());
            done();
        }, 3000);
    }
}

export class toogleButton3Success extends Operation {

    public button3Reducer(state: Button3): Button3 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }
}

//----------------------- FORM -----------------//


export class changeInput extends Operation {
    constructor(public payload: string) {
        super()
    }

    public form1Reducer(state: Form1): Form1 {
        return assign(state, { inputvalue: this.payload });
    }
}

export class onForm1SaveButonPress extends Operation {
    constructor(public payload: string) {
        super()
    }

    validate({ getState, action }, allow, reject) {
        if (action.payload.length >= 5) {
            allow(action);
            return;
        }
        reject(new onForm1SaveButonPressFailed());
    }

    public form1Reducer(state: Form1): Form1 {
        return assign(state, { savedValue: this.payload, errorMessage: "" });
    }
}

export class onForm1SaveButonPressFailed extends Operation {

    public form1Reducer(state: Form1): Form1 {
        return assign(state, { errorMessage: "Minimun 5 chars" });
    }
}
