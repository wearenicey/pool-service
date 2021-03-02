import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private https: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.https.post<any>('https://poolservice.rs/contact', data)
  }

  // sendEmail(data) {
  //   console.log(data);
  //   this.http.post('http://localhost:5000/contact', data).subscribe((data) => {
  //   });

  // }


}
