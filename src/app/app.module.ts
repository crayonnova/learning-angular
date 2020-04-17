import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerItemComponent } from './server/server-item/server-item.component';
import { ServerDetailComponent } from './server/server-detail/server-detail.component';
import { TestingComponent } from './testing/testing.component';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerItemComponent,
    ServerDetailComponent,
    TestingComponent,

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
