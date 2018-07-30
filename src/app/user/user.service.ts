import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../model/usuario.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UsuarioModel[]> {
   return this.http.get<UsuarioModel[]>('http://localhost:8080/getUsers');
  }
}
