import {Component} from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `
    <p>Success message!</p>
  `,
  // templateUrl: './success-alert.component.html',
  styles: [`
    p {
      color: green;
    }
  `]
})
export class SuccessAlertComponent {
}
