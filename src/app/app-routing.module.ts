import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /* Funcionario routing */
  {
    path:'postular',
    loadChildren:() => import('./screens/funcionario-screens/postulaciones-trabajo-screen/postulaciones-trabajo-screen.module')
    .then(m => m.PostulacionesTrabajoScreenModule)
  },
  {
    path:'informacion-clinica/:id',
    loadChildren:() => import('./screens/funcionario-screens/postulaciones-trabajo-info-screen/postulaciones-trabajo-info-screen.module')
    .then(m => m.PostulacionesTrabajoInfoScreenModule)
  },
  {
    path:'postulaciones-activas',
    loadChildren:() => import('./screens/funcionario-screens/postulaciones-activas-screen/postulaciones-activas-screen.module')
    .then(m => m.PostulacionesActivasScreenModule)
  },
  {
    path:'informacion-postulaciones-activas/:id',
    loadChildren:() => import('./screens/funcionario-screens/postulaciones-activas-info-screen/postulaciones-activas-info-screen.module')
    .then(m => m.PostulacionesActivasInfoScreenModule)
  },
  /* Hospital routing */
  {
    path:'postulaciones-trabajo-hospital',
    loadChildren:() => import('./screens/hospital-screens/postulaciones-trabajo-h-screen/postulaciones-trabajo-h-screen.module')
    .then(m => m.PostulacionesTrabajoHScreenModule)
  },
  {
    path:'informacion-postulaciones-hospital/:id',
    loadChildren:() => import('./screens/hospital-screens/postulaciones-trabajo-h-info-screen/postulaciones-trabajo-h-info-screen.module')
    .then(m => m.PostulacionesTrabajoHInfoScreenModule)
  },
  {
    path:'postulaciones-activas-hospital',
    loadChildren:() => import('./screens/hospital-screens/postulaciones-activas-h-screen/postulaciones-activas-h-screen.module')
    .then(m => m.PostulacionesActivasHScreenModule)
  },
  {
    path:'informacion-postulaciones-activas-hospital/:id',
    loadChildren:() => import('./screens/hospital-screens/postulaciones-activas-h-info-screen/postulaciones-activas-h-info-screen.module')
    .then(m => m.PostulacionesActivasHInfoScreenModule)
  },
  /* Colegio medico routing */
  {
    path:'solicitudes-colegio-medico',
    loadChildren:() => import('./screens/colegio-medico-screens/solicitudes-promocion-screen/solicitudes-promocion-screen.module')
    .then(m => m.SolicitudesPromocionScreenModule)
  },
  {
    path:'informacion-solicitudes-colegio-medico/:id',
    loadChildren:() => import('./screens/colegio-medico-screens/solicitudes-promocion-info-screen/solicitudes-promocion-info-screen.module')
    .then(m => m.SolicitudesPromocionInfoScreenModule)
  },
  {
    path:'modificar-datos',
    loadChildren:() => import('./screens/colegio-medico-screens/modificar-datos-screen/modificar-datos-screen.module')
    .then(m => m.ModificarDatosScreenModule)
  },
  {
    path:'informacion-modificar-datos/:id',
    loadChildren:() => import('./screens/colegio-medico-screens/modificar-datos-info-screen/modificar-datos-info-screen.module')
    .then(m => m.ModificarDatosInfoScreenModule)
  },
  /* usuario basico routing */
  {
    path:'promocion-basica',
    loadChildren:() => import('./screens/basic-screens/promocion-basic-screen/promocion-basic-screen.module').then(m => m.PromocionBasicScreenModule)
  },
  {
    path:'promocion-basica-informacion',
    loadChildren:() => import('./screens/basic-screens/promocion-basic-screen-info/promocion-basic-screen-info.module').then(m => m.PromocionBasicScreenInfoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
