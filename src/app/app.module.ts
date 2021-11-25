import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListapersoneComponent } from './listapersone/listapersone.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ModificaPersonaComponent } from './modifica-persona/modifica-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AggiungiPersonaComponent } from './aggiungi-persona/aggiungi-persona.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RicercaPersonaComponent } from './ricerca-persona/ricerca-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapersoneComponent,
    HomeComponent,
    ModificaPersonaComponent,
    AggiungiPersonaComponent,
    NavbarComponent,
    RicercaPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
