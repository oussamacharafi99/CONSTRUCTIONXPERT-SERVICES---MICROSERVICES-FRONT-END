import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/LoginDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private     API_SIGNUP = 'http://localhost:8888/USER-SERVICE/api/auth/signup';
  private      API_LOGIN = 'http://localhost:8888/USER-SERVICE/api/auth/login';

  constructor(private http : HttpClient) { }



                //  <?--------------sign up ------------------->
                signup(person: Person): Observable<any>{
                  return  this.http.post(`${this.API_SIGNUP}`,person) 
             }
               //  <?--------------login up ------------------->
               signin(loginDto:LoginDto):Observable<{ token: string, role: string }> {
                   return this.http.post<{ token: string, role: string }>(`${this.API_LOGIN}`,loginDto)}
}
