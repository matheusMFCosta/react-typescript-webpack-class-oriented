## React TypeScript starter pack 
	This is a basic and simple project that will guide you to develop your application using [React](https://facebook.github.io/react/) and [Typescript](https://www.typescriptlang.org/) in a new way to build a React project.

## Motivation 

	[Redux](http://redux.js.org/) is a reliable and solid Framework, but using it brings a lot of overhead when we talk about continuous develop. 
	Redux is based in congregate the state of the application on its state and the only way to manipulate it data is with the use of actions. That means that the whole project state is based on how these actions is created. 
	
	The structure of an action consists in plain object that is composed of a set of keys: a Type which is a unique string that is basic an Id, and any other key/value of your choice. The problem that it brings is that every part of Redux structure works around the actions Type, so in many parts of your project there are a need of the checking if a specific Action Type matches to the one that you want to handle. 
	The OverHead that to build a simple interaction in a project is clearly seen when we draw a basic structure of a dispatch of an action in our minds. An example of a button press event that will fetch some data from the server is a good example of this OverHead, the following steps represents the files that have to been changed to apply correctly this effect.
	
	1 - dispatch the action at your component
	2 - define the action type at the action types files 
	3 - create you action on the action creation file 
	4 - create a reducer to apply the effect of your action ( eg: change the icon of you button to fetching, matching the action type dispatched)
	5 - make the fetch call using some framework ( matching the action type dispatched)
	6 - in case of success or fail dispatch some action ( have to create a action type in action types file)
	7 - apply the fetched data to the reduce ( change reduces files once again, matching the action type dispatched) 


	Analysing this example we can see that a easy task such as fetching some data makes us to change many files in many places, and change this way to create projects to an easier way is the motivation of this project.

# The Solution

	This project uses these projects [redux-logic](https://github.com/jeffbski/redux-logic) e [redux-ignore](https://github.com/omnidan/redux-ignore)
	The main idea of the solution is to unify the flow of the acton in a simgle place. What that means? that means that this project merged the Action, Reduce and the framework of a Api Call in a single place. 
	How is it possible ? this project managed change the structure of an action to an object of a class that holds all the data of an action (type and paylaod) among all other steps of a dispatch of an action.
	What is the result of this implementation? taking the previous used example we now have the following steps to have the save result when we talk about continuous develop.

	1 - dispatch the action at you component ( dispatching an object of the class of your action)
	2 - define the action type and the action class at the action file  
		at the same class define the reduced and the api call

# the structure 

	The Redux-logic framework allow us to use the functions validate() and Process() that are called before and after the function Reduce respectively, that means that now we can handle, for example, form validation before the action effect is applied and allow or reject its effect depending the validation or even call another action. 
	The function process should be used to make pos-processing or api calls.
	All functions ( validate, Reduce, process and constructor ) are optionals and can be ignored if the use is not necessary, 


##The Action Class
```
export class appInit implements Operation {
   public type: string = appActionsName.INIT_APP;

   constructor(public payload: boolean) {}

   //validate() {}

   public Reduce(state: App): App {
       return assign(state, { init: this.payload });
   }

   //process() {}
}
```

##Reducer 
	The Reducer files don't have to be changed after it`s set up, but basic it calls the function Reducer if the action type matches the one that you choose to respond. 

```

export const appReducerNoFilter = (state: App = multifactorInitialState, action: Operation) => {
   if (action.Reduce) {
       return action.Reduce(state);
   }
   return state;
};

export const appReducer = filterActions(appReducerNoFilter, Object.keys(appActionsName));
```

## Getting Started

Requirement:

- NodeJS v7.10.0

Install dependencies:

```
npm install
```
## Running production server

```
npm run start:dev
```

Visit [http://localhost:80/hello] or [https://localhost/hello] 


