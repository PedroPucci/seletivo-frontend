import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreate } from '../models/user-create.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'https://localhost:7039/api/users';

  constructor(private http: HttpClient) {}

  create(user: UserCreate): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}