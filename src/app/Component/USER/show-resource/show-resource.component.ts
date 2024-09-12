import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from 'src/app/model/resource';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-show-resource',
  templateUrl: './show-resource.component.html',
  styleUrls: ['./show-resource.component.css']
})
export class ShowResourceComponent implements OnInit {

  listResource !: Resource[] 
  task_id !:number 
constructor(private service:ResourceService,
  private route: ActivatedRoute,
    private router: Router
){}

  ngOnInit(): void {
    this.getTaskId()
   this.allTask()
   
   
   
  }

  allTask(){
    this.service.fetchAllResourceByTaskId(this.task_id).subscribe((res:Resource[])=>{
      this.listResource = res
      console.log(this.listResource);
      
    })
      
    
  }
  getTaskId(): void {
    this.route.params.subscribe(params => {
      this.task_id = +params['id'];
      console.log(this.task_id);
    });
  }
  delete(id:number){
    this.service.deleteResource(id).subscribe()
    this.allTask()
  }

}
