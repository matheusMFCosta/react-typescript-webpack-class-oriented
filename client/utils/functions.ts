export abstract class Operation {
    type?: string;
    validate?: Function;
    process?: Function;
    Reduce?: Function;
    payload?: any;
}

type Partial<T> = { [P in keyof T]?: T[P] };

export function assign<T>(state: T, patch: Partial<T>): T {
    return Object.assign({}, state, patch);
}

const formatActionName = (inputString: string) => {
    let formatedActionName: string = "";
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i].match(/[A-Z]/) != null) {
            formatedActionName = formatedActionName + "_";
        }
        formatedActionName = formatedActionName + inputString[i];
    }
    return formatedActionName.toUpperCase();
};

export function actionTypeDecorator(target: any) {
    target.prototype.type = formatActionName(target.name);
    return target;
}
