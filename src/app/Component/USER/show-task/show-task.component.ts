import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  listTask !: Task[] 
  project_id !:number 
constructor(private service:TaskService,
  private route: ActivatedRoute,
    private router: Router
){}

  ngOnInit(): void {
    this.getProjectId()
   this.allTask()
   console.log(this.project_id);
   
   
   
   
  }

  getProjectId(): void {
    this.route.params.subscribe(params => {
      this.project_id = +params['id'];
      console.log(this.project_id);
    });
  }

  allTask(){
    this.service.fetchAllTaskByProjectId(this.project_id).subscribe((res:any[])=>{
      this.listTask =res

      console.log(this.listTask);
      
      
      
    })
    
  }

  delete(id:number){
    this.service.deleteTask(id).subscribe()
    this.allTask()
  }

  showId(id: number): void {

    this.router.navigate(['/task_id', id]);
  
  }
}