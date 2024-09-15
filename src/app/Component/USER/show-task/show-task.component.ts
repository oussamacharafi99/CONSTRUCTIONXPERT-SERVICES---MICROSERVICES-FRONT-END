import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'; // Add this

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  listTask = new MatTableDataSource<Task>(); // Use MatTableDataSource to bind to mat-table
  project_id!: number;

  // Specify the columns to be displayed
  displayedColumns: string[] = ['id', 'project_id', 'heurs', 'startDate', 'endDate', 'status', 'description', 'actions'];

  constructor(
    private service: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProjectId();
    this.allTask();
  }

  getProjectId(): void {
    this.route.params.subscribe(params => {
      this.project_id = +params['id'];
      console.log(this.project_id);
    });
  }

  allTask(): void {
    this.service.fetchAllTaskByProjectId(this.project_id).subscribe((res: Task[]) => {
      this.listTask.data = res; 
      console.log(this.listTask);
    });
  }

  delete(id: number): void {
    this.service.deleteTask(id).subscribe(() => {
      this.allTask(); 
    });
  }

  showId(id: number): void {
    this.router.navigate(['/resource', id]); 
    console.log(id);
  }
}
