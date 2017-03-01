import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {AppComponent}  from './app.component';
import {AppService} from "./app.service";
import {RouterModule} from '@angular/router';
import {routes} from './app.router';
import {ShowComponent}from './showTask/showTask.component';
import {CreateComponent}from'./createTask/createTask.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule.forRoot(routes), HttpModule],
  declarations: [AppComponent, HomeComponent, ShowComponent, CreateComponent],
  bootstrap: [AppComponent],
  providers: [AppService],

})
export class AppModule {
}
