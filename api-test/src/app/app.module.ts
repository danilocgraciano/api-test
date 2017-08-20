import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { IngressoComponent } from './ingresso/ingresso.component';
import { IngressoService } from "./ingresso/ingresso.service";

@NgModule({
  declarations: [
    AppComponent,
    IngressoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IngressoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
