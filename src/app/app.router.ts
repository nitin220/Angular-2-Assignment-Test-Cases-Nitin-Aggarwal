import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {ShowComponent} from "./showTask/showTask.component";
import {CreateComponent} from "./createTask/createTask.component";

export const routes: Routes = [{
  path : '',
  redirectTo: '/home',
  pathMatch: 'full'
},{path : 'home',
  component: HomeComponent
},{path : 'show',
  component: ShowComponent
},{path : 'create',
  component: CreateComponent
},{
  path : 'create/:indexSent',
  component: CreateComponent
}];
