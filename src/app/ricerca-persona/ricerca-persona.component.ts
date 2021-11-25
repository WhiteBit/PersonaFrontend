import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/Persona';
import { PersonaserviceService } from '../personaservice.service';

@Component({
  selector: 'app-ricerca-persona',
  templateUrl: './ricerca-persona.component.html',
  styleUrls: ['./ricerca-persona.component.css']
})
export class RicercaPersonaComponent implements OnInit {

  checkoutForm = this.formBuilder.group({name: '', lastname: '', eta: ''});

  persone: Persona[] = [];

  constructor(private formBuilder: FormBuilder, private PersonaService: PersonaserviceService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    let nome = this.checkoutForm.get('name')?.value;
    let cognome = this.checkoutForm.get('lastname')?.value;
    let eta = this.checkoutForm.get('eta')?.value;

    return this.PersonaService.ricercaPersone(nome, cognome, eta).subscribe(persone => this.persone = persone);
  }

}
