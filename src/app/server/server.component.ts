import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // alternative apply in .html
  // selector: [app-server],
  // selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  constructor() { 
 
  }

  isLoading : boolean = false;
  isOpen : boolean = false;
  serverId : number = 3;
  serverStatus : boolean = false;
  text : string = '';
  doFun() {
    alert('hello world clicked!'+this.serverId)
  }
  getServerStatus () {
   return this.serverStatus? 'Online' : 'Offline'
  }
  getLoadingStatus () {
    return this.isLoading? 'Loading....' : 'Completed'
  }
  onClick(){
    this.isLoading = true;

    setTimeout(() => {
      this.serverStatus = !this.serverStatus;
      this.isLoading = false;
    }, 2000);
  }
  onInput(event : Event ){
    this.text = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {
  }

}
