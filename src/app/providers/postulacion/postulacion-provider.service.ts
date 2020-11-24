import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Postulacion } from '../../models/postulacionusuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulacionProviderService {
  constructor(private httpService: HttpService) {
  }
  public createPostulacion(postulacion: any): Observable<any>{
    console.log(postulacion);
    return this.httpService.post<any>('/api/postulacion/add', postulacion);
    //postulacion$.toPromise();
    //return postulacion$;
  };
 
}