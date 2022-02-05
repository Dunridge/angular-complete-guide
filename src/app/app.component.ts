import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  counterValue = 0;
  displayParagraph = false;
  buttonText = 'Display Details';
  countContainer: Date[];

  constructor() {
    this.countContainer = [];
  }

  trackByIndex(index: number): number {
    return index;
  }

  toggleDisplay(): void {
    this.displayParagraph = !this.displayParagraph;
    this.counterValue++;
    // this.countContainer.push(this.counterValue);
    this.countContainer.push(new Date());
  }
}
