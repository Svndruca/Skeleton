import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'experiencia-laboral',
    loadChildren: () => import('./experiencia-laboral/experiencia-laboral.module').then(m => m.ExperienciaLaboralPageModule)
  },
  {
    path: 'certificaciones',
    loadChildren: () => import('./certificaciones/certificaciones.module').then(m => m.CertificacionesPageModule)
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./mis-datos/mis-datos.module').then(m => m.MisDatosPageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then(m => m.AccessPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

