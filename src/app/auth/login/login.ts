import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  authService = inject(Auth)

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    funIngresar() {

      if (this.loginForm.invalid) {
        console.error('Formulario inválido');
        return;
      }

      this.authService.login(this.loginForm.value).subscribe(
        (res: any) => {
          console.log('Login successful', res);
          // Aquí puedes manejar la respuesta del login, como redirigir al usuario
        },
        (error: any) => {
          console.error('Login failed', error);
          // Aquí puedes manejar el error de login, como mostrar un mensaje de error
        }
      );
    } 
}
