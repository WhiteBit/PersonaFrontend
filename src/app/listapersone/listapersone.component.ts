import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/Persona';
import { PersonaserviceService } from '../personaservice.service';

@Component({
  selector: 'app-listapersone',
  templateUrl: './listapersone.component.html',
  styleUrls: ['./listapersone.component.css']
})
export class ListapersoneComponent implements OnInit {

  persone: Persona [] = [];
  constructor(private personaService: PersonaserviceService) { }

  ngOnInit(): void {
    this.getPersona(); //al caricamento della pagina visualizziamo tutte le persone
  }

  getPersona(){
    return this.personaService.getPersona().subscribe(persone => this.persone = persone); //ci iscriviamo e usiamo la funzione del servizio
  }

  eliminaPersona(id:number){
    return this.personaService.eliminaPersona(id).subscribe(() => this.getPersona())
  }
}
