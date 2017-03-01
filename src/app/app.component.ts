import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styles: [`h1{color : darkcyan}`]
})
export class AppComponent  { name = 'Angular'; }
