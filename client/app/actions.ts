import { Operation, assign, actionTypeDecorator } from "./../utils/functions";
import { Button1, Button2, Button3, Form1, simpleExplanation } from "./app";

//---------------- Simple Explanation -------------------//

@actionTypeDecorator
export class rawAction implements Operation {}

@actionTypeDecorator
export class payloadAction implements Operation {
    constructor(public payload: string) {}
}

@actionTypeDecorator
export class changeReducerAction implements Operation {
    constructor(public payload: string) {}

    public simpleExplanationReducer(state: simpleExplanation): simpleExplanation {
        return assign(state, { actionValue: this.payload });
    }
}

//---------------- Toogle Buttons -------------------//
@actionTypeDecorator
export class toogleButton1 implements Operation {
    public payload;

    public button1Reducer(state: Button1): Button1 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }
}

@actionTypeDecorator
export class toogleButton2 implements Operation {
    public payload;

    public button1Reducer(state: Button2): Button2 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }

    public button2Reducer(state: Button2): Button2 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }
}

@actionTypeDecorator
export class toogleButton3 implements Operation {
    public payload;

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

@actionTypeDecorator
export class toogleButton3Success implements Operation {
    public payload;

    public button3Reducer(state: Button3): Button3 {
        return assign(state, { buttonStatus: !state.buttonStatus });
    }
}

//----------------------- FORM -----------------//

@actionTypeDecorator
export class changeInput implements Operation {
    constructor(public payload: string) {}

    public form1Reducer(state: Form1): Form1 {
        return assign(state, { inputvalue: this.payload });
    }
}

@actionTypeDecorator
export class onForm1SaveButonPress implements Operation {
    constructor(public payload: string) {}

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

@actionTypeDecorator
export class onForm1SaveButonPressFailed implements Operation {
    public payload;

    public form1Reducer(state: Form1): Form1 {
        return assign(state, { errorMessage: "Minimun 5 chars" });
    }
}
