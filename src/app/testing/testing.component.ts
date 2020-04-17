import {Component} from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `
    <input [(ngModel)]="name" #ctrl="ngModel" required>

    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.pending }}</p>
    
    <button (click)="setValue()">Set value</button>
  `,
})

export class TestingComponent {
  name: string = '';

  setValue() { this.name = 'Nancy'; }
}