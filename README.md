# Weather App built with React using Hooks and Redux

1. React-[Redux](https://redux.js.org/api/store/) implementation.
2. [Redux-Sagas](https://redux-saga.js.org/) for async redux actions.
3. Async [fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch) client implementation.
4. [React-forms](https://reactjs.org/docs/forms.html): submit, fetch, normalize, parse, validate.
5. React [Hooks](https://reactjs.org/docs/hooks-intro.html).
6. [Lazy loading](https://reactjs.org/docs/code-splitting.html) components for better performance, improved from 76 % to 97 % on [Lighthouse Audit](https://developers.google.com/web/tools/lighthouse)
7. React [Routing](https://reacttraining.com/react-router/web/guides/quick-start) with react-router-dom, conditional routing and child routing.

## Screenshots:

    Lazy loading performance audit:
<div class="img-container" style="text-align: center; display: block; max-width: 100%;">
    <img alt="audit" src="screenshots/audit.png" height="400"/>
</div>

    Forms:
<div class="img-container" style="text-align: center; display: block; max-width: 100%;">
    <img alt="tablet_landscape" src="screenshots/form.png" width="49%" />
    <img alt="tablet_portrait" src="screenshots/componentData.png" width="49%" />
</div>



&nbsp;




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
### `node node-server.js`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

The second command refers to the node server working as the back-end api serving a json (database) db.json

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
