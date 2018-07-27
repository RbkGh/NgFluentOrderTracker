import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
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
export class AppModule {
}
