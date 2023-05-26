import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  onLogin(obj: any): Observable<any> {
    return this.http.post(
      'https://3e98bf64-f9b6-4383-8c97-e1e40139631f.mock.pstmn.io/demo3',
      obj
    );
  }
}
