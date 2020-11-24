import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppFirebaseModule,
    AppMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
