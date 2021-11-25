import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/Persona';
import { PersonaserviceService } from '../personaservice.service';

@Component({
  selector: 'app-aggiungi-persona',
  templateUrl: './aggiungi-persona.component.html',
  styleUrls: ['./aggiungi-persona.component.css']
})
export class AggiungiPersonaComponent implements OnInit {

  checkoutForm = this.formBuilder.group({name: '', lastname: '' , email: '', eta: ''});
  
  constructor(
    private formBuilder: FormBuilder,
    private PersonaService: PersonaserviceService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){ // quando si fa il submit del form
    let p1: Persona = {
      "name": this.checkoutForm.get('name')?.value,
      "lastname": this.checkoutForm.get('lastname')?.value,
      "email": this.checkoutForm.get('email')?.value,
      "eta": this.checkoutForm.get('eta')?.value
    }; //salviamo in p1 tutti i nuovi dati

    return this.PersonaService.aggiungiPersona(p1).subscribe(() => {
      this.PersonaService.getPersona();
      this.router.navigateByUrl('/listapersone');
    }) //dopo aver fatto la modifica torniamo alla pagina specificata
  }

}
