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
  
  text : string = '';
  isLoading : boolean = false;
  servers : string[]= [];

  onClick(){
    this.text = this.text.trim();

    if(this.text === '' || this.text == null){
      console.log('It is empty');
      return ;
    }
    
    this.text = this.text.replace(/  +/g, ' ').toLowerCase();
    
    let isDuplicate = this.servers.some( (server) =>  server == this.text );

    (isDuplicate)? console.log('Duplicate') : this.servers.push(this.text);
    console.log(this.servers);
    this.text = ''; 
  }
  
  ngOnInit(): void {
  }

}
