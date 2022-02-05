import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counterValue = 0;
  displayParagraph = false;
  buttonText = 'Display Details';
  countContainer: number[];

  constructor() {
    this.countContainer = [];
  }

  toggleDisplay(): void {
    this.displayParagraph = !this.displayParagraph;
    this.counterValue++;
    this.countContainer.push(this.counterValue);
  }
}
