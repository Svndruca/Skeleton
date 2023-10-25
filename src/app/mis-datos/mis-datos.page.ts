import { Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { AlertController, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  usuario: string = ''; 
  nombre: string = ''; 
  apellido: string = ''; 
  nivelEducacion: string = ''; 
  fechaNacimiento: string = '';

  constructor(
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
   
    const nombreUsuario = localStorage.getItem('usuario');
    if (nombreUsuario) {
      this.usuario = nombreUsuario;
    }

    this.animacionTitulo();
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';

    const inputElements = document.querySelectorAll('.animate-input');
    inputElements.forEach((element) => {
      this.renderer.addClass(element, 'shake-animation');

      
      setTimeout(() => {
        this.renderer.removeClass(element, 'shake-animation');
      }, 300); 
    });
  }

  async mostrarInfo() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre} Apellido: ${this.apellido}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  animacionTitulo() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(3500)
      .direction('alternate')
      .keyframes([
        { offset: 0, transform: 'translateX(0)', opacity: '1' },
        { offset: 0.25, transform: 'translateX(calc(50% - 10px))', opacity: '0.2' },
        { offset: 0.5, transform: 'translateX(0)', opacity: '1' },
        { offset: 0.75, transform: 'translateX(calc(-50% + 10px))', opacity: '0.2' },
        { offset: 1, transform: 'translateX(0)', opacity: '1' },
      ]);
    animation.play();
  }

  navigateToHome() {
    this.router.navigate(['/home']); 
  }
}

