# _JS Week 2 Code Review_

#### _An Angular 2 web application, 3.25.2016_

### By _**Jon Sweeney **_

## Description

_This web app is designed to allow a user to log the food that they have eaten for the day.  The web app will store the meal names, details and calories.  The user can view the healthy and unhealthy meals by filtering the meals._

_The project was put together using Angular 2, NPM, Gulp and Bower._


## Setup/Installation

#### System Requirements

1. [Node.js](https://nodejs.org/en/) w/ [npm](https://www.npmjs.com/)
2. [Bower](http://bower.io/)
3. [Angular2](https://www.npmjs.com/package/angular2)

#### Installation

* After cloning the repo, you will need to install dependencies...


    npm install
    bower install

* Gulp is used to handle both building the site and launching a server to host the site...


    gulp serve

## Known Bugs

_This application is not fully designed and may have unknown bugs. Known bugs to be fixed are:_

1. [ ] Unable to handle negative numbers entered.

_The current gulpfile.js does not handle creation of a production version of the build (with minified js). Front-end dependencies will still be minified._

## To Do (coming in future versions)

1. [ ] No crash at errors during watch. Will log errors but not attempt a rebuild.
2. [ ] Folder for organizing html files, gulp will build fresh html in the build folder.

## Support and contact details

_If you have any questions, concerns, or feedback, please contact the authors through_ [gitHub](https://github.com/jsween/).

## Technologies Used

* _This project was built on [Node.js](https://nodejs.org/en/)._
* _Dependencies were handled with [npm](https://www.npmjs.com/) and [Bower](http://bower.io/)._
* _[Gulp](http://gulpjs.com/) is an awesome asset pipeline used in this project._

### License

MIT License.

Copyright (c) 2016 **_Jon Sweeney_**
