import { Component, OnInit } from '@angular/core';
import { server } from './server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public serverDetailItem : server;

  servers : server[] = [];

  constructor() { }

  onShowServerDetail(data : server) {
    this.serverDetailItem = new server(data.name,data.status,data.detail);
    console.log(this.serverDetailItem);
  
  }

  onSubmit(name : HTMLInputElement, check : HTMLInputElement){

   this.servers.push(new server(name.value,check.checked))
    console.log(this.servers);
  }


  ngOnInit(): void {
  }

}
