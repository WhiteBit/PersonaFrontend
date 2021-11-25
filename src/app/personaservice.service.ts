import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from 'src/Persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaserviceService {

  httpOptions = {
    headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
    ),
    };
  
  constructor(private http: HttpClient) { }

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>("http://localhost:8080/persona/visualizza"); //si collega alla funzione del backend che fa visualizzare tutte le persone
  }

  eliminaPersona(id:number): Observable<Persona>{
     return this.http.delete<Persona>(`http://localhost:8080/persona/delete/${id}`, this.httpOptions);
  }

  modificaPersona(p: Persona): Observable<Persona>{
    console.log(p);
    return this.http.post<Persona>("http://localhost:8080/persona/modifica", p, this.httpOptions);
  }

  getPersonaId(id: number): Observable<Persona>{
    return this.http.get<Persona>(`http://localhost:8080/persona/perid/${id}`, this.httpOptions);
  }

  aggiungiPersona(p: Persona): Observable<Persona>{
    return this.http.post<Persona>("http://localhost:8080/persona/aggiungi", p, this.httpOptions);
  }

}
