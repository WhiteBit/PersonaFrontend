import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Persona } from 'src/Persona';
import { PersonaserviceService } from '../personaservice.service';

@Component({
  selector: 'app-modifica-persona',
  templateUrl: './modifica-persona.component.html',
  styleUrls: ['./modifica-persona.component.css']
})
export class ModificaPersonaComponent implements OnInit {
  checkoutForm = this.formBuilder.group({ id:'',name: '', lastname: '' ,email:'',eta:''});
  p?:Persona;

  onSubmit(){
    this.p= {"id": this.checkoutForm.get('id')?.value,
    "name": this.checkoutForm.get('name')?.value,
    "lastname": this.checkoutForm.get('lastname')?.value,
    "email": this.checkoutForm.get('email')?.value,
    "eta": this.checkoutForm.get('eta')?.value};
    return this.PersonaService.modificaPersona(this.p).subscribe(() => this.PersonaService.getPersona())
  }
  constructor(
    private formBuilder: FormBuilder,
    private PersonaService: PersonaserviceService
    ) { }

  ngOnInit(): void {

  }

}
