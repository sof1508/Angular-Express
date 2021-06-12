import { Injectable } from '@angular/core';
import { CrearPersonaComponent } from '../components/crear-persona/crear-persona.component';
import { Persona } from '../entities/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  personas: Persona[] = [];
  private urlApi = 'http://localhost:3000/users/'

  constructor(private httpClient: HttpClient ) { }

  crearPersona(persona: Persona): Observable<any>{
    //this.personas.push(persona);
    return this.httpClient.post<any>(this.urlApi, persona);
  }

  listarPersonas(): Observable<Persona[]>{
    //return this.personas;
    return this.httpClient.get<Persona[]>(this.urlApi);
  }

  listarPersona(id: any): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.urlApi + id);
  }


  modificarPersona(id:any, persona: Persona): Observable<any>{
    /*const personaModificar = Persona.getPersonaByDni(this.personas, dni);
    if(personaModificar != undefined) {
      this.personas[this.personas.indexOf(personaModificar)] = persona;
    }*/
    return this.httpClient.put<any>(this.urlApi + id, persona);

  }

  borrarPersona(id:any): Observable<any>{
    //this.personas = this.personas.filter(persona => persona.Dni != dni);
    return this.httpClient.delete(this.urlApi + id);
  }

  borrarTodo(): Observable<any>{
    //this.personas = [];
    return this.httpClient.delete(this.urlApi);
  }
}

