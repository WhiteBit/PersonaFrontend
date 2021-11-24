import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Persona } from 'src/Persona';
import { PersonaserviceService } from '../personaservice.service';

@Component({
  selector: 'app-modifica-persona',
  templateUrl: './modifica-persona.component.html',
  styleUrls: ['./modifica-persona.component.css']
})
export class ModificaPersonaComponent implements OnInit {
  checkoutForm = this.formBuilder.group({name: '', lastname: '' ,email:'',eta:''});
  
  p!:Persona;
  p1!:Persona;

  onSubmit(){
    const routeParams = this.route.snapshot.paramMap; 
    const IdFromRoute = Number(routeParams.get('id'));
    this.p1= {"id":IdFromRoute,
    "name": this.checkoutForm.get('name')?.value,
    "lastname": this.checkoutForm.get('lastname')?.value,
    "email": this.checkoutForm.get('email')?.value,
    "eta": this.checkoutForm.get('eta')?.value};
    console.log(this.p1);
    return this.PersonaService.modificaPersona(this.p).subscribe(() => this.PersonaService.getPersona())
  }
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private PersonaService: PersonaserviceService
    ) { }

  ngOnInit(): void {
    // First get the product id from the current route. 
    const routeParams = this.route.snapshot.paramMap; 
    const IdFromRoute = Number(routeParams.get('id')); // Find the product that correspond with the id provided in route. 
    this.getPersonaId(IdFromRoute);
    console.log(IdFromRoute);
    
  }

  getPersonaId(id: number){
    this.PersonaService.getPersonaId(id).subscribe(p => this.p=p);
  }
}
