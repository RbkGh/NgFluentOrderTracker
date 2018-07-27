# NgFluentOrderTracker - Your one-stop beautiful order tracker component for angular apps 

Github Url : 
=================
[https://github.com/RbkGh/NgFluentOrderTracker](https://github.com/RbkGh/NgFluentOrderTracker)

Demo
=================
![](https://github.com/RbkGh/NgFluentOrderTracker/raw/master/demo/demoimage.png)

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
<app-fluent-order-tracker [orderEntities]="orderEntities"></app-fluent-order-tracker>

```
#checkout  how to populate orderEntities in app.component.ts.

 ## Contributing
 
 Contributions are welcome. You can start by looking at [issues](https://github.com/RbkGh/NgFluentOrderTracker/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) with label *Help wanted*  or creating new Issue with proposal or bug report.
 Note that we are using https://conventionalcommits.org/ commits format.
 
 ## Inspiration
 This library is inspired by [Order Status Tracking](https://codepen.io/manit/pen/uFnJw) 
 
## Warning
Library is under active development and may have API breaking changes for subsequent major versions after 1.0.0.



Author(s)
---------
- Rodney Boachie


### License: 

    Copyright (C) 2018 Rodney Boachie <rbk.unlimited@gmail.com>
    This file is part of NgFluentOrderTracker
    NgFluentOrderTracker is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.


