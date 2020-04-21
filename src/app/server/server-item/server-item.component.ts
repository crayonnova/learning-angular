import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { server } from '../server';



@Component({
  selector: 'app-server-item',
  inputs : ['serverItem'],
  outputs : ['showServerDetail'],
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {

  serverItem: server;

  showServerDetail = new EventEmitter<server>();


  constructor() { 
    console.log(' item constrctor() called');
  }

  onShowDetail(item : server){
    this.showServerDetail.emit({
      name :item.name,
      status : item.status,
      detail : item.detail
    })
  }

  ngOnInit(): void {
   console.log('item ngOnInit() callled');
  }

}
