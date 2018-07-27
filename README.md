# NgFluentOrderTracker - Your one-stop beautiful order tracker component for angular apps 

Github Url : 
=================
[https://github.com/RbkGh/NgFluentOrderTracker](https://github.com/RbkGh/NgFluentOrderTracker)

Table of contents
=================
 * [Getting started](#getting-started)
 * [Contributing](#contributing)
 
 ## Getting started
 ### Step 1: Install `ng-fluent-order-tracker`:
 ```shell
 npm i ng-fluent-order-tracker
 ```
 ### Step 2: Import the FluentOrderTrackerModule by including it in its @NgModule imports array:
 ```js

import {FluentOrderTrackerModule} from './modules/fluent-order-tracker/fluent-order-tracker.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FluentOrderTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 ```
 ### Step 3 : Use the selector in a component template : 
 ```html
<app-fluent-order-tracker></app-fluent-order-tracker>

```
 ## Contributing
 
 Contributions are welcome. You can start by looking at [issues](https://github.com/RbkGh/NgFluentOrderTracker/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) with label *Help wanted*  or creating new Issue with proposal or bug report.
 Note that we are using https://conventionalcommits.org/ commits format.
 
 ## Inspiration
 This library is inspired by [Order Status Tracking](https://codepen.io/manit/pen/uFnJw) 
 
## Warning
Library is under active development and may have API breaking changes for subsequent major versions after 1.0.0.




