# react-native-boilerplate-margmaker

Production ready boilerplate to create mobile app in android and ios

This project is a React Native boilerplate that can be used to kickstart a production ready mobile application.

The boilerplate provides **an optimized module based architecture for building solid mobile applications** through **Container-View** - design pattern which is used in this architecture.

```
If you love this boilerplate, give us a star :)
```

### Container-View design pattern

- Container/View pattern (also known as Presentational/Container, Smart/Dumb) is a technique of splitting components into 'Containers' which are responsible for any stateful logic and data fetching and 'Views' which are responsible for data presentation.
- It used to increase the reusability of views

#### Module:

- All the various modules like home, profile, login etc are module.
- Each module consists of container, component and slice, container consist of index.js file which exports the module container as a default module which makes the screen available as a functional component.

#### Component:

- Component hold Control and other common components too to display data, capture user event.

#### Common Control:

- Controls like buttons, checkbox, dropdown etc.
- It can be reused in components to increase code reusability hence increase development speed

#### Redux:

- If any event occurs from component, it dispatches action. Events like fetch data, button press, filter data etc.
- If action is of async/thunk(Asynchronous) type then it will go to middleware to fetch data otherwise it directly go to Reducer.
- After getting the payload(data) from successful async, it updates its state immutably, by making copies of the parts of the state that need to change and only modify those copies.
- By using selector component will get data from store, if data changes Screen re-renders.

#### Middleware:

- Depending on type of request it calls api using AXIOS library or the data which is available in JSON file.

### Pre-requisites

- Node.js (v16.x)
- NPM (v6.x)

## Quick start

After cloning this repo run command from your project directory

```
npm i
```

## Available Scripts

In the project directory, you can run:

```
npm run android
```

Runs the app in the android app.<br />

The app will reload if you make edits.<br /> You will also see any lint errors in the console.

```
npm run ios
```

Runs the app in the ioa app.<br />

The app will reload if you make edits.<br /> You will also see any lint errors in the console.

## Folder structure (How to structure your code)

### assets

- All the static assets reside here.
- Each asset should be registered and exported from the /index.js
- Thus, all assets will be accessible and imported from ‘/assets’
- This can include but not limited to images, logos, vector icons, fonts, etc.

### components

- Only shared components used across modules are placed here.
- All the components should be registered and exported from /index.js for a single access point.

### modules

- All the various modules like home, about etc are defined here.
- Each module consist of container, component and slice, container consist of index.js file which exports the module container as a default module which makes the screen available as a functional component.
- Component directory hold all the component that are required by only this module.
- Slice directory contain redux slice and backend/service api.
- All data requests api/json file path are defined here, and response data is transformed and served. In some cases, it can also be saved in the redux store.
- The components may dispatch actions, read the store and update themselves based on the data changes. They may access the services directly if it doesn’t need to be added to the redux store.

### navigation

- It contains, all the routing logic.
- Our app uses “react-navigation” for routing implementation.

### redux

- “react-redux, redux-persist, @reduxjs/toolkit, redux-logger” is being used to manage the state of application. It is a single source of truth, it means that the only way to change data in Screen is to dispatch redux action which will change state within redux reducer
- This is the central state of the application. This incorporates all the mapping between reducer, store, persist and middle-wares.
- It combines all the “slice” present in all the “modules”
- A “slice” combines the action(synchronous), thunkAction(asynchronous), reducer, selector, initial state of application.
- thunkActions will use modules/…/slice/…Action.js for backend connectivity. Thunk is a redux middleware used to handle asynchronous actions and side-effects.
- “redux-persist” is used to persist data locally in device across user session.
- State describes the condition of the app at a specific point in time
- The Screen is rendered based on state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The Screen re-renders based on the new state

### services

- Services are to manage all api requests. You can see them as a bridge or an adapter between the database server APIs and the view layer (pages and components) of our application.
- It will take care of all the network calls of our app.

## Available Features in boilerplate

### Localization

### Biometric

### Push Notification

### Splash Screen

### App Intro Screen

### Permission

## License

This project is released under the [GNU License](LICENSE).

## About us
