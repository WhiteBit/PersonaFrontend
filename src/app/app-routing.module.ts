import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiPersonaComponent } from './aggiungi-persona/aggiungi-persona.component';
import { HomeComponent } from './home/home.component';
import { ListapersoneComponent } from './listapersone/listapersone.component';
import { ModificaPersonaComponent } from './modifica-persona/modifica-persona.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "listapersone", component: ListapersoneComponent},
  {path: 'modifica/:id', component: ModificaPersonaComponent},
  {path: 'aggiungi', component: AggiungiPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
