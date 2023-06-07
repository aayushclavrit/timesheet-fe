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
      'https://79368f50-c6b9-4e6e-88d9-c16b4ace407b.mock.pstmn.io/demo1',
      obj
    );
  }
}
