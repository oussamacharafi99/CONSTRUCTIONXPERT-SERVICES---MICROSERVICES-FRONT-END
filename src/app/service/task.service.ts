import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

    private API_TASK = 'http://localhost:8888/TASK-SERVICE'; // Base URL of your API

    constructor(private http: HttpClient) { }
  
    
  
  
     //  <?----------------------------------Project-------------------------------------->
  
  
                              //  <?--------------add ------------------->
                       AddTask(task: Task): Observable<Task> {
                          return this.http.post<Task>(`${this.API_TASK}/save`, task);
                        }
                         //  <?--------------get ------------------->
                         getTask(task_id: number): Observable<Task> {
                          return this.http.get<Task>(`${this.API_TASK}/get_task/${task_id}`);
                        }
    
  
                         //  <?--------------all project ------------------->

                           fetchAllTaskByProjectId(project_id:number):Observable<Task[]>{
                               return this.http.get<Task[]>(`${this.API_TASK}/get_all_project_id/${project_id}`)}
    
                          //  <?--------------delete  ------------------->
                            deleteTask(id:number):Observable<Task>{
                                return this.http.delete<Task>(`${this.API_TASK}/delete/${id}`)}
    
                                       //  <?--------------fetch tasks  ------------------->
                            fetchAllTask():Observable<Task[]>{
                              return this.http.get<Task[]>(`${this.API_TASK}/get_all_task`)}
                           //  <?--------------update  ------------------->
                            updateTask(task:Task,id:number):Observable<Task>{
                              return this.http.put<Task>(`${this.API_TASK}/update_task/${id}`,task)}
  }
  