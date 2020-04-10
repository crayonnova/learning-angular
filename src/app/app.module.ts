import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerItemComponent } from './server-item/server-item.component';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
