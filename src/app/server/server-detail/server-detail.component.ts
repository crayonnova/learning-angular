import { Component, OnInit,Input } from '@angular/core';
import { server } from '../server';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {

  @Input() serverDetailItem : server;

  
  constructor() {
    console.log('detail constructor() called');
   }



  ngOnInit(): void {

  }

}
