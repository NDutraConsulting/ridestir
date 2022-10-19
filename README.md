# Rental Analytics Dashboard - *Ridestir*

**Ridestir** utilizes a shared bike ride metrics API to display graphs and critical metrics about bike usage and location availability to the user.

## User Stories

The following **required** functionality is completed:
* [x] User can navigate to individual views as follows:
    * Data views for marketing
    * Data views for equipment distribution management.
    * Data views for and hourly usage metrics for equipment purchase planning.
    * So that each team can make more informed decisions about the business.
* [x] User can view **end of day metrics** for each location. (Bar Chart)
    * So that the logistics team can move rentals from surplus locations to locaitons in need. 
*[x] User can view **checkin and checkout metrics** for each location by the hour.
    * So that the logistics team can understand high usage points throughout the day.
        * Optional: Which locations have the **most checkouts in an hour**.
* [x] User can view **Age demographics** for each location. (Bar Chart)
    * So that the marketing team can create relevant advertising for our riders. We want to make sure the ads are tailored to particular age demographics.


The following **optional** features are implemented:

* [ ] User can identify bike usage or problems, so that bikes can be serviced, replaced and repaired.
  * [ ] The mileage of five most ridden bikes.
  * [ ] The mileage of five least ridden bikes. (These bikes might be broken)
* [ ] Logistics team can view **end of day metrics** on a map
    * So that the logistics team can more effieciently coordinate the transfer of rentals from surplus locations to locaitons in need.


Developer functionality
* [x] Developer can start a local Mock Server so that the developer can verify correctness of the solution.
    * npm run mock-server
* [x] Developer can develop feature and unit tests with the Mock Server so that team based CI/CD does not break existing functionality.
    * npm run test


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
