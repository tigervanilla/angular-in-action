// import angular dependencies needed
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import the app-routing module
import { AppRoutingModule } from './app-routing.module';

// import the stocks service
import { StocksService } from './services/stocks.service';

// import the app component
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';

// NgModule annotation to define a module by passing an object
@NgModule({
  declarations: [ // declarations are to list any components and directives used in the app
    AppComponent, SummaryComponent
  ],
  imports: [ // other modules that are used in the app
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [StocksService], // Providers are any services used in the app
  bootstrap: [AppComponent] // Bootstrap declares which component to use as the first to bootstrap the application
})
export class AppModule { }
