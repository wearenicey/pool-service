import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iinfo } from '../app/model/info.model'

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<Iinfo> {
    return this.http.post<Iinfo>('http://localhost:5000/contact', obj)
  }

}
