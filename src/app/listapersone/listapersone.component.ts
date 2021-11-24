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
    this.getPersona();
  }

  getPersona(){
    return this.personaService.getPersona().subscribe(persone => this.persone = persone);
  }
}
