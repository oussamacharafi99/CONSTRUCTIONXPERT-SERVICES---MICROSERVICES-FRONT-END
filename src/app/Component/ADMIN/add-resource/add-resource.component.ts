import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceService } from 'src/app/service/resource.service';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  formResource !: FormGroup;

  listTask !: Task[]

constructor(private fb: FormBuilder , private service: ResourceService, private taskService:TaskService) { }

ngOnInit(): void {
this.Resource()
this.fetchAllTask()

}


                       


Resource(){
this.formResource = this.fb.group({
  resourceName: ['', Validators.required],                                               
  resourceType: ['', Validators.required],
  startDate: ['', Validators.required],
  task_id: ['', Validators.required]
});
}


fetchAllTask(){
  this.taskService.fetchAllTask().subscribe((res:any)=>{
    this.listTask = res
    console.log(this.listTask);
    
  })
}

onSubmit() {
const value = this.formResource.value

  this.service.AddResource(value).subscribe()
  this.Resource()

  console.log('Resource submitted:', value);

  if(value){
    alert("Resource added")
  }

  

  
}

}

