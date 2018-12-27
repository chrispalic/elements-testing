import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // Do not pass a component here
  bootstrap: [],
  // Add and pass component here
  entryComponents: [MessageComponent]
})
export class AppModule { }
