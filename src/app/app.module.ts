import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{ClintesModule} from './clintes/clintes.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClintesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
