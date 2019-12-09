# Angular for Java developers - demo application

## Steps to recreate this app
Install Angular CLI:
`npm install -g @angular/cli` 

Generate new app, open in IDE:  
`ng new demo-app` 
> Would you like to add Angular routing? (y/N)   

Answer 'y'

> Which stylesheet format would you like to use?  
 
Choose 'SCSS'

 
`cd demo-app`  
`idea .`

Inspect the project structure

`ng serve`

Open app at `http://localhost:4200`

Test/lint app:  
`ng test`  
`ng e2e --port 4242`  
`ng lint`

Add Angular material:  
`ng add @angular/material`


> Enter a prebuilt theme name, or "custom" for a custom theme:   

indigo-pink  
  
> Set up HammerJS for gesture recognition?
  
No    
> Set up browser animations for Angular Material?    

Yes    

Generate home component:  
`ng generate component home`  
    
Move home screen to home component (move the tests too)  

Generate navigation component:  
`ng generate @angular/material:material-nav --name navigation`

Add home component inside `mat-sidenav-content` of navigation comoponent

Generate dashboard/grid:  
`ng generate @angular/material:material-dashboard --name dashboard`

Add HomeComponent and DashboardComponent to app-routing.module
Add links to home and dashboard in navigation component (change navigation links to [routerLink]'s)    

Move router-outlet to navigation component (replacing app-home)
  
  
Generate table:  
`ng generate @angular/material:material-table --name talks`

Start backend (https://github.com/bertjan/a4jd-demo-backend)

Add table component to routing and navigation

Generate service:  
`ng generate service talks/talks`

Update talks component: use service to fetch data from backend 


Create production build:  
`ng build --aot --prod` 

Navigate to directory `dist/demo-app`  
Start production build in nginx:   
`docker run --mount type=bind,source="$(pwd)",target=/usr/share/nginx/html -p 80:80 nginx`




# Default Angular readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
