import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskStatus } from 'src/app/enums/TaskStatus';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  formTask !: FormGroup;

  listProject !: Project[]

constructor(private fb: FormBuilder ,private projectService:ProjectService, private service: TaskService) { }

ngOnInit(): void {
this.Task()
this.fetchAllProject()

}


Task(){
this.formTask = this.fb.group({
  project_id: ['', Validators.required],
  startDate: ['', Validators.required],
  endDate: ['', Validators.required],                                               
  status: [TaskStatus.In_Progress, Validators.required],
  description: ['', Validators.required],
  
});
}
fetchAllProject(){
this.projectService.getAllProject().subscribe((res:Project[])=>
this.listProject = res

)
}

onSubmit() {
const value = this.formTask.value

  this.service.AddTask(value).subscribe()
  this.Task()

  console.log('Task submitted:', value);

  if(value){
    alert("task added")
  }

  
  
}

}

