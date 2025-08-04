import { Component, inject } from '@angular/core';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss'
})
export class Perfil {
  authService = inject(Auth);

  constructor() {
    // Aquí puedes inicializar cualquier dato necesario para el perfil
    this.authService.perfil().subscribe(
      (res) =>{
        console.log(res);
      },
      (error) =>{
        console.log(error);
      }
    )
  }
}
