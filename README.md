React Quiz
==========

> Get questions from an API and make with a simple way a quiz like "What Harry Potter character are you?" or "What type of gamer are you?".

![alt gif animation as react app preview](https://user-images.githubusercontent.com/5076677/79695463-47783200-8277-11ea-9c3b-7fdc2b40c888.gif)

## Tech stack

* [Create React App](https://create-react-app.dev/docs/getting-started)
* [TypeScript](https://create-react-app.dev/docs/adding-typescript)
* [React](https://reactjs.org/docs/getting-started.html)
* [React Redux](https://react-redux.js.org/)
* [Redux](https://redux.js.org/api/api-reference)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [React i18next](https://react.i18next.com/)
* [mirage.js](https://miragejs.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment variables

Environment variables are defined for development (`yarn start`) and production (`yarn build`).

| variable                          | description |
| --------------------------------- | ----------- |
| `REACT_APP_LANG`                  | Defines default language. Fallback is en. |
| `REACT_APP_API_QUESTIONS_GET_ALL` | API url to get all question.              |
| `REACT_APP_API_RESULTS_GET_ALL`   | API url to get all possible quiz results. |

To get your API to work change variable values inside `.env.production`. For development environment the API data is simulated by mirage.js (See `dev-server.ts`).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
