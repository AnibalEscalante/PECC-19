import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCmScreenComponent } from './screens/colegio-medico-screens/home-cm-screen/home-cm-screen.component';

const routes: Routes = [
  /* Funcionario routing */
  {
    path:'home-funcionario',
    loadChildren:() => import('./screens/funcionario-screens/home-funcionario-screen/home-funcionario-screen.module')
    .then(m => m.HomeFuncionarioScreenModule)
  },
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
  {
    path:'cargar-curriculum',
    loadChildren:() => import('./screens/funcionario-screens/cargar-cv-funcionario-screen/cargar-cv-funcionario-screen.module')
    .then(m => m.CargarCvFuncionarioScreenModule)
  },
  /* Hospital routing */
  {
    path:'home-hospital',
    loadChildren:() => import('./screens/hospital-screens/home-hospital-screen/home-hospital-screen.module')
    .then(m => m.HomeHospitalScreenModule)
  },
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
  {
    path:'situacion-hospital',
    loadChildren:() => import('./screens/hospital-screens/situacion-hospital/situacion-hospital.module')
    .then(m => m.SituacionHospitalModule)
  },
  /* Colegio medico routing */
  {
    path:'home-colegio-medico',
    loadChildren:() => import('./screens/colegio-medico-screens/home-cm-screen/home-cm-screen.module')
    .then(m => m.HomeCmScreenModule)
  },
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
  {
    path:'solicitudes-colegio-medico-hosp',
    loadChildren:() => import('./screens/colegio-medico-screens/solicitudes-promocion-hosp-screen/solicitudes-promocion-hosp-screen.module')
    .then(m => m.SolicitudesPromocionHospScreenModule)
  },
  {
    path:'informacion-solicitudes-colegio-medico-hosp/:id',
    loadChildren:() => import('./screens/colegio-medico-screens/solicitudes-promocion-hosp-info-screen/solicitudes-promocion-hosp-info-screen.module')
    .then(m => m.SolicitudesPromocionHospInfoScreenModule)
  },
  {
    path:'modificar-datos-hosp',
    loadChildren:() => import('./screens/colegio-medico-screens/modificar-datos-hosp-screen/modificar-datos-hosp-screen.module')
    .then(m => m.ModificarDatosHospScreenModule)
  },
  {
    path:'informacion-modificar-datos-hosp/:id',
    loadChildren:() => import('./screens/colegio-medico-screens/modificar-datos-hosp-info-screen/modificar-datos-hosp-info-screen.module')
    .then(m => m.ModificarDatosHospInfoScreenModule)
  },
  /* usuario basico routing */
  {
    path:'home-basic',
    loadChildren:() => import('./screens/basic-screens/home-basic-screen/home-basic-screen.module').then(m => m.HomeBasicScreenModule)
  },
  {
    path:'promocion-basica',
    loadChildren:() => import('./screens/basic-screens/promocion-basic-screen/promocion-basic-screen.module').then(m => m.PromocionBasicScreenModule)
  },
  {
    path:'promocion-basica-inf-funcionario',
    loadChildren:() => import('./screens/basic-screens/promocion-basic-screen-info/promocion-basic-screen-info.module').then(m => m.PromocionBasicScreenInfoModule)
  },
  {
    path:'promocion-basica-inf-hospital',
    loadChildren:() => import('./screens/basic-screens/promocion-basic-hosp-info-screen/promocion-basic-hosp-info-screen.module').then(m => m.PromocionBasicHospInfoScreenModule)
  },
  /* login routing */
  {
    path:'login',
    loadChildren:() => import('./screens/login-screens/login-screen/login-screen.module').then(m => m.LoginScreenModule)
  },
  {
    path:'registro',
    loadChildren:() => import('./screens/registro-screen/registro/registro.module').then(m =>m.RegistroModule )
  },

  {
  path:'',
  loadChildren:() => import('./screens/main-home-screen/home/home.module').then(m =>m.HomeModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
