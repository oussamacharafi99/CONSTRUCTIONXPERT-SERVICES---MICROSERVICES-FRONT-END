// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private API_PROJECT = 'http://localhost:8888/PROJECT-SERVICE'; 

  constructor(private http: HttpClient) { }

  


   //  <?----------------------------------Project-------------------------------------->


                            //  <?--------------add ------------------->
                     AddProject(project: Project): Observable<Project> {
                        return this.http.post<Project>(`${this.API_PROJECT}/save`, project);
                      }
                       //  <?--------------get ------------------->
                       getProject(project_id: number): Observable<Project> {
                        return this.http.get<Project>(`${this.API_PROJECT}/get+id/${project_id}`);
                      }

                       //  <?--------------all project page------------------->
                         fetchAllProject(page: number, size: number,sortColumn: string, sortDirection: string):Observable<any>{
                          let params = new HttpParams()
                          .set('page', page.toString())
                          .set('size', size.toString())
                          .set('sort', `${sortColumn},${sortDirection}`); 
                             return this.http.get<any>(`${this.API_PROJECT}/get+all`,{ params })}
  
                        //  <?--------------delete equipment ------------------->
                          deleteProject(id:number):Observable<Project>{
                              return this.http.delete<Project>(`${this.API_PROJECT}/delete/${id}`)}
  
                         //  <?--------------update equipment ------------------->
                          updateProject(project:Project,id:number):Observable<Project>{
                            return this.http.put<Project>(`${this.API_PROJECT}/update/${id}`,project)}

                         //--------------------------- all project -------------------------//
                          getAllProject():Observable<Project[]>{
                           return this.http.get<Project[]>(`${this.API_PROJECT}/all+projects`)
                           }
}
