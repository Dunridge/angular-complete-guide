import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-complete-guide';
  // TODO: figure out how to disable tests for all generated stuff for the app

  /*
  Tip: How to disable all the tests for the application
  Put the skipTests: true into the angular application schematic:
  "@schematics/angular:application": {
          "strict": true,
          "skipTests": true
        }
  * */
}
