## React TypeScript starter pack

## Redux Action oriented

This is a basic and simple project that will guide you to develop your application using [React](https://facebook.github.io/react/) and [Typescript](https://www.typescriptlang.org/) in a new way to build a React project.

## Motivation

[Redux](http://redux.js.org/) is a reliable and solid Framework, but using it brings a lot of overhead when we talk about continuous develop.
Redux is based in congregate the state of the application on its state and the only way to manipulate it data is with the use of actions. That means that the whole project state is based on how these actions are created.
The structure of an action consists in a plain object that is composed of a set of keys: a Type which is a unique string that is basic an Id, and any other key/value of your choice. The problem that it brings is that every part of Redux structure works around the actions Type, so in many parts of your project there is a need of the checking if a specific Action Type matches to the one that you want to handle.

The OverHead that this structure brings to asimple interactions is clearly seen when we draw a basic structure of a dispatch of an action in our minds. An example of a button press event that will fetch some data from the server is a good example of this hard work, the following steps represents the files that have to been changed to apply correctly this effect.

    1 - dispatch the action at your component
    2 - define the action type at the action types files
    3 - create you action on the action creation file
    4 - create a reducer to apply the effect of your action ( eg: change the icon of you button to fetching, matching the action type dispatched)
    5 - make the fetch call using some framework as redux-thunk( matching the action type dispatched)
    6 - in case of success or fail dispatch some action ( have to create a action type in action types file)
    7 - apply the fetched data to the reduce ( change reduces files once again, matching the action type dispatched)

Analysing this example we can see that a easy task such as fetching some data makes us to change many files in many places, and create a new way to build projects to an easier way is the motivation of this project.

## The Solution

The main idea of the solution is to unify the flow of the acton in a simgle place. What that means? that means that this project merged the Action, Reduce and the framework of a Api Call in a single place.

How is it possible ? We jus need to change the structure of an action to an object that holds all the data of an action (type and paylaod) among all other steps of a dispatch of an action.

What is the result of this implementation? taking the previous used example we now have the following steps to have the save result when we talk about continuous develop.

    1 - dispatch the action at you component ( dispatching an object of the class of your action)
    2 - define the action class at the action file that contains the reducer function and the apiCall framework(if needed)
    3 - dispatch other actions if needed

## what changes to the redux structure?

What brings the complexity to the redux flow is the need to handle actions based on the actions types, at the end we are simple matching string to decide which action to do, and in my opinion this can be improved.
With the new structure created here we are not handle the reduces by action types anymore because we are giving to the reducers the function that it should handle.
All reducers are listening to the dispatch of all action of the aplication so it was transformed to handle only the action assing to that reducer in the action, that give us the possibility to especify which reducers our actions can modify
So basicly we are not dispatching actions to trigger the reducers anymore, we are giving the correct function to the reducer to call. this is a win/win becase now we have the at the same place the input and the effect of the action in the same place

The Reducer files don't have to be changed after it`s set up, but basic it calls the function Reducer if the action type matches the one that you choose to respond.

Reducer example

```
export const appReducer = (state: OMS = appInitialState, action) => {
  if (action.appReducer) {
    return action.appReducer(state);
  }
  return state;
};
```

## Bonus

This project uses the project [redux-logic](https://github.com/jeffbski/redux-logic) to bring more value to the product. The Redux-logic framework allow us to use the functions validate() and Process() that are called before and after the function Reduce respectively, that means that now we can handle, for example, form validation before the action effect is applied and allow or reject its effect depending the validation or even call another action.

The function process should be used to make pos-processing or api calls.
All functions ( validate, Reduce, process and constructor ) are optionals and can be ignored if the use is not necessary,

## The Action Class

```
export class appInit extends Operation {
   constructor(public payload: boolean) {
       super()
   }

   //validate() {}

   public appReducer(state: App): App {
       return assign(state, { init: this.payload });
   }

   //process() {}
}
```

## Getting Started

Requirement:

* NodeJS v7.10.0

Install dependencies:

```
npm install
```

## Running develop server

```
npm run start:dev
```

Visit [http://localhost:80/hello] or [https://localhost/hello]
