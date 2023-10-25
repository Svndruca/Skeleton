import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.page.html',
  styleUrls: ['./experiencia-laboral.page.scss'],
})
export class ExperienciaLaboralPage implements OnInit {
  trabajaActualmente: boolean = false;
  
  constructor(private router: Router) { } // Inyecta el servicio Router

  navigateToHome() {
    this.router.navigate(['/home']); // Redirige a la página de inicio
  }

  ngOnInit() {
  }
}


