import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Importei a classe que criei no app-rounting.module.ts
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, HttpClientModule], // Importei o AppRounting do routing aqui e importei o modulo do header
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
