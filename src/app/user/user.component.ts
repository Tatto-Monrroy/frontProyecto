import { UsuarioModel } from '../model/usuario.model';
import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  private users: Array<UsuarioModel>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  private cargarUsuarios(): void {
    this.userService.getUsers().subscribe( res => {
      this.users = res;
    } );
  }

}
