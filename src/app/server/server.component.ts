import { Component, OnInit, setTestabilityGetter, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-server',
  // alternative apply in .html
  // selector: [app-server],
  // selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  constructor(private title : Title) { 
    
   
  }
  
  setTitle(newtitle : string){
      this.title.setTitle('hello')
  }
 
  text : string = '';
  isLoading : boolean = false;
  servers : string[]= [];
  
  onClick(){
    this.setTitle('hello')
    // console.log(this.hello);
    this.text = this.text.trim();

    if(this.text === '' || this.text == null){
      console.log('It is empty');
      return ;
    }
    
    this.text = this.text.replace(/  +/g, ' ').toLowerCase();
    
    let isDuplicate = this.servers.some( (server) =>  server == this.text );

    (isDuplicate) ? console.log('Duplicate') : this.servers.push(this.text);
    console.log(this.servers);
    this.text = ''; 
  }
  
  ngOnInit(): void {
  }

}
