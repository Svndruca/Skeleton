import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formularioLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) {
    this.formularioLogin = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  ingresar() {
    if (this.formularioLogin.valid) {
      const usuarioIngresado = this.formularioLogin.value.usuario;
      const passwordIngresado = this.formularioLogin.value.password;

      if (usuarioIngresado === 'sandra' && passwordIngresado === '1234') {
        // Almacena el nombre de usuario en el Local Storage
        localStorage.setItem('usuario', usuarioIngresado);
        this.router.navigate(['/home']);
      } else {
        this.mostrarAlerta('Error', 'Las credenciales son incorrectas. Inténtelo de nuevo.');
      }
    } else {
      this.mostrarAlerta('Error', 'Los datos ingresados no cumplen los requisitos.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}


















