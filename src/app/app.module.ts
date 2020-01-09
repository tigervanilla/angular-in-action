// import angular dependencies needed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// import the app component
import { AppComponent } from './app.component';

// NgModule annotation to define a module by passing an object
@NgModule({
  declarations: [ // declarations are to list any components and directives used in the app
    AppComponent
  ],
  imports: [ // other modules that are used in the app
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Providers are any services used in the app
  bootstrap: [AppComponent] // Bootstrap declares which component to use as the first to bootstrap the application
})
export class AppModule { }
