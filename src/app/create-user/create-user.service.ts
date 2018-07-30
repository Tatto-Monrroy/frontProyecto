import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



import { UsuarioModel } from '../model/usuario.model';
import { RestResponse } from '../model/restResponse.model';

@Injectable()
export class CreateUserService {

  constructor(private http: HttpClient) { }
  /**
   * Metodos para validar campos obligatorios
   * @param user 
   */
  public validate(user: UsuarioModel): boolean {
    let isValid: boolean = true;

    if (!user.primerNombre) {
      isValid = false;
    }
    if (!user.apellido) {
      isValid = false;
    }
    if (!user.direccion) {
      isValid = false;
    }


    return isValid;
  }

  public saveOrUpdate(user: UsuarioModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/saveOrUpdate', JSON.stringify(user) );
  }


}
