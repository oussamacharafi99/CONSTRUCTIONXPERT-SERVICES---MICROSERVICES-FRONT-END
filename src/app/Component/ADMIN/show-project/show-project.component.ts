import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit ,AfterViewInit {
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  sortColumn: string = 'id';
  sortDirection: string = 'asc';
  displayedColumns: string[] = ['id', 'name', 'budget', 'hours', 'startDate', 'endDate', 'description', 'actions'];
  projets: Project[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ProjectService, private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProject();
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe((sortState) => {
      this.onSortChange(sortState);
    });
  }

onSortChange(sortState: Sort) {
    this.sortColumn = sortState.active;
    this.sortDirection = sortState.direction || 'asc';
    this.getAllProject(); 
}

  getAllProject() {
    this.service.fetchAllProject(this.currentPage - 1, this.itemsPerPage,this.sortColumn, this.sortDirection).subscribe((response:any) => {
      this.projets = response.content;
      this.totalItems = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

  delete(id: number) {
    this.service.deleteProject(id).subscribe();
  }

  showId(id: number): void {
    this.router.navigate(['/tasks', id]); 
    console.log(id);
    
  }
  getPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getAllProject();
    }
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
