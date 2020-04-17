import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { server } from '../server';



@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {

  @Input() serverItem: server;

  @Output() showServerDetail = new EventEmitter<server>();


  constructor() { 
    
  }

  onShowDetail(item : server){
    this.showServerDetail.emit({
      name :item.name,
      status : item.status,
      detail : 'something'
    })
  }

  ngOnInit(): void {
   
  }

}
