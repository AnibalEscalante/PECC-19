import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:30204";

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json',
        'Autorization': ''
      })
    }
   }
  
  public get<type>(path: string): Observable<type> {
    return this.httpClient.get<type>(this.baseUrl + path, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  }
  
  public post<type>(path: string, body: any): Observable<type>{
    console.log(body);
    return this.httpClient.post<type>(this.baseUrl + path, body, this.httpOptions)
    .pipe(map((data: any) => {
      return data.message as type;
    }));
  }



}
