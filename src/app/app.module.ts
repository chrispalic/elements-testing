import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';

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
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MessageComponent, { injector});
    customElements.define('app-message', customElement);
  }
  ngDoBootstrap() {

  }
}
