import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.page.html',
  styleUrls: ['./certificaciones.page.scss'],
})
export class CertificacionesPage implements OnInit {
  certificadoVence: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleCertificadoVence() {
    this.certificadoVence = !this.certificadoVence;
  }

  navigateToHome() {
    this.router.navigate(['/home']); 
  }
}




