import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning-test';
  @ViewChild('foo') foo : ElementRef;

  constructor(){
    
  }
  doFun(){
    console.log(this.foo);
  }


}
