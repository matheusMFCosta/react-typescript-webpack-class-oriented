import createLogic from "./../utils/createLogic";
import * as userMenu from "./../app/actions";

const actionsArray = [...Object.values(userMenu)];

type createLogicType = {
    name: any;
    type: string;
    cancelType: any;
    latest: any;
    debounce: any;
    throttle: any;
    validate: any;
    transform: any;
    process: any;
    processOptions: any;
    warnTimeout: any;
};

export let logicActions: Array<createLogicType> = [];
actionsArray.forEach((value: any, index) => {
    logicActions.push(createLogic(new value()));
});
