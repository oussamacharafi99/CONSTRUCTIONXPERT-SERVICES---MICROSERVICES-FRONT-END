import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../model/resource';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

    private API_RESOURCE = 'http://localhost:8888/RESOURCE-SERVICE'; 

    constructor(private http: HttpClient) { }
  
    
  
  
     //  <?----------------------------------Resource-------------------------------------->
  
  
                              //  <?--------------add ------------------->
                       AddResource(resource: Resource): Observable<Resource> {
                          return this.http.post<Resource>(`${this.API_RESOURCE}/save`, resource);
                        }
                         //  <?--------------get ------------------->
                         getResource(task_id: number): Observable<Resource> {
                          return this.http.get<Resource>(`${this.API_RESOURCE}/get_task/${task_id}`);
                        }
    
  
                         //  <?--------------all project by project id------------------->

                           fetchAllResourceByTaskId(project_id : number):Observable<Resource[]>{
                               return this.http.get<Resource[]>(`${this.API_RESOURCE}/get_all_resources_by_task_id/${project_id}`)}
    
                          //  <?--------------delete  ------------------->
                            deleteResource(id:number):Observable<Resource>{
                                return this.http.delete<Resource>(`${this.API_RESOURCE}/delete/${id}`)}
    
                           //  <?--------------update  ------------------->
                            updateResource(resource:Resource,id:number):Observable<Resource>{
                              return this.http.put<Resource>(`${this.API_RESOURCE}/update_resource/${id}`,resource)}
  }
  