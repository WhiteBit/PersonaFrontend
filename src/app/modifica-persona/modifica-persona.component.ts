import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private PersonaService: PersonaserviceService,
    private location: Location,
    private router: Router,
    ) { }

  ngOnInit(): void {
    // First get the person id from the current route. 
    const routeParams = this.route.snapshot.paramMap; 
    const IdFromRoute = Number(routeParams.get('id')); // Find the person that correspond with the id provided in route. 
    this.getPersonaId(IdFromRoute);
    console.log(IdFromRoute);
    
  }

  getPersonaId(id: number){
    this.PersonaService.getPersonaId(id).subscribe(p => this.p=p); //qui prendiamo la persona e la usiamo per riempire i campi del form nell'html
  }

  onSubmit(){ // quando si fa il submit del form
    let p1!:Persona;
    const routeParams = this.route.snapshot.paramMap; 
    const IdFromRoute = Number(routeParams.get('id')); //prendiamo l'id dall'url
    p1 = {"id":IdFromRoute,
    "name": this.checkoutForm.get('name')?.value,
    "lastname": this.checkoutForm.get('lastname')?.value,
    "email": this.checkoutForm.get('email')?.value,
    "eta": this.checkoutForm.get('eta')?.value}; //salviamo in p1 tutti i nuovi dati
    return this.PersonaService.modificaPersona(p1).subscribe(() => {this.PersonaService.getPersona(); this.router.navigateByUrl('/listapersone')}) //dopo aver fatto la modifica torniamo alla pagina specificata
  }

}
