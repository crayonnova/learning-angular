import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { server } from './server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public serverDetailItem : server;
  @ViewChild('name') name : ElementRef;
  @ViewChild('check') check : ElementRef;
  @ViewChild('detail') detail : ElementRef;

  servers : server[] = [];

  constructor() {
   
   }

  onShowServerDetail(data : server) {
    this.serverDetailItem = new server(data.name,data.status,data.detail);
    console.log(this.serverDetailItem);
  
  }

  onSubmit(){
   this.servers.push(new server(this.name.nativeElement.value,this.check.nativeElement.checked,this.detail.nativeElement.value))
  console.log(this.servers);
  }


  ngOnInit(): void {
   
  }

}
