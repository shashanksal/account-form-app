## Account Page App

#### AccountPage

React based web application that displays sample Account information page for an ongoing project

## Project Status

This project is a personal project and currently in development. Users can see their account page information. Users can edit the info which gets stored into a redux store

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

To Generate Code Coverage:

`npm run test:coverage`

## Folder Structure

After creation, your project should look like this:

```
appName/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
    robots.txt
  src/
    __tests__/
      ......
      ......
    assets/
      ......
      ......
    actions/
      ......
      ......
    reducers/
      ......
      ......
    components/
      App/
        .....
      Header/
        .....
      .....
      .....
    store/
      ......
      ......
    utils/
      ......
      ......
    index.css
    index.js
    setupTests.js
  .editorconfig
  jest.config.js
  babel.config.js
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.

## Tech Stack used

- React
- Redux
- Javascript ES6+
- Material-UI for components
- Jest

## Reflection

This was a sample project I decided to undertake as an assignment. I started this process by using the `create-react-app` boilerplate, then adding `redux` and `@material-ui/core`.

One of the main challenges I ran into was calling dispatch actions from sibling Components using Redux. For solving this, I used individual form value update. Hence, I had to compromise onto validation handling, as well as performance issues.

At the end of the day, the technologies implemented in this project are React, Redux, Material-UI, Jest, and a significant amount of JavaScript, JSX, and material UI styles. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes.

## TODOs

- In the next iteration I plan on imporving the validation handling by using some library instead of manual handling.
- Better way to handle Tab Focusout event
