import { Component } from '@angular/core';

@Component({
  selector: 'itcorpo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itcorpo-app';

  employees = [{
    firstName: "John",
    lastName: "Lennon"
  }, {
    firstName: "Paul",
    lastName: "McCartney"
  }]

  consume(event){
    console.log(event)
  }
}
