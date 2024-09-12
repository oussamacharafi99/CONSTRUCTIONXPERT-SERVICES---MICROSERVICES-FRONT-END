import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  formProject !: FormGroup;

constructor(private fb: FormBuilder , private service: ProjectService) { }

ngOnInit(): void {
this.Project()

}
 

Project(){
this.formProject = this.fb.group({
  name: ['', Validators.required],
  budget: ['', Validators.required],
  startDate: ['', Validators.required],
  endDate: ['', Validators.required],
  description: ['', Validators.required]
});
}

onSubmit() {
const value = this.formProject.value

  this.service.AddProject(value).subscribe()
  this.Project()

  console.log('Project submitted:', value);

  if(value){
    alert("project added")
  }

  

  
}

}
