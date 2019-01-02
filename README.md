# ElementsTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Setup
You will need to run `npm install --save-dev fs-extra concat` to get the additional file system pieces to allow the build to concat the js files.
You need to update the folderName variable in the elements-build.js file. This will ensure that it can find the files to build and will name them as such when it concatenates them.
Add the `/elments` folder to the `.gitignore` file so that the built binaries are not checked in.
Run the command `ng add @angular/elements` to add all of the elements libraries and polyfills in.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:elements` to build the project in production mode. The final files will be placed in a folder named elements at the top level of the project structure. This single concatenated file is needed to make it easier to drop on a page.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
