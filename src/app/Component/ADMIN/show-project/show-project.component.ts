import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'budget', 'hours', 'startDate', 'endDate', 'description', 'actions'];
  listProject: Project[] = [];

  constructor(private service: ProjectService, private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject() {
    this.service.fetchAllProject().subscribe((res: Project[]) => {
      this.listProject = res;
    });
  }

  delete(id: number) {
    this.service.deleteProject(id).subscribe();
  }

  showId(id: number): void {
    this.router.navigate(['/tasks', id]); 
    console.log(id);
    
  }
}


// export class ShowProjectComponent implements OnInit {

//   listProject : Project[] = []
//   listTask : Task[] = []
//   selectedProjectId: number | null = null; 
//  constructor(private service:ProjectService,private taskService:TaskService ,private router: Router){}

// ngOnInit(): void {
// this.getAllProject()
// console.log(this.selectedProjectId);

// }
// getAllProject(){
// this.service.fetchAllProject().subscribe((res:Project[])=>
// this.listProject = res )
// }
// delete(id:number){
// this.service.deleteProject(id).subscribe();
// }

// showId(id: number): void {

//   this.router.navigate(['/project_id', id]);
// this.selectedProjectId = this.selectedProjectId === id ? null : id;

// }
// }
