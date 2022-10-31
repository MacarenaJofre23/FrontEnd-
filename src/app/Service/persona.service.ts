import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backendportafolioapp.herokuapp.com/persona/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + `lista`);
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}` );
  }

  public update(id: number, persona: persona ): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

 /* public save(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, Persona)
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}
