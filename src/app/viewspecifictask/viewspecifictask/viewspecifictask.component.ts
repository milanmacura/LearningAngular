import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/task.model';
import { ViewTaskService } from 'src/app/viewtask.service';
import { TaskService } from 'src/app/task.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-viewspecifictask',
  templateUrl: './viewspecifictask.component.html',
  styleUrls: ['./viewspecifictask.component.css']
})
export class ViewspecifictaskComponent implements OnInit {
  
  pageTitle: string = 'Task detail';  
  errorMessage: string = '';
  task: ITask  | undefined;
  msg: string = '';
  idIzRute: number;

  constructor(private route: ActivatedRoute,private router:Router,private viewtaskService:ViewTaskService, 
    private taskService:TaskService)
   {

  }



  ngOnInit() {

    this.idIzRute = +this.route.snapshot.paramMap.get("id");//iime parametra iz route configuracije
    this.pageTitle += `:${this.idIzRute}`;    
    this.getTask(this.idIzRute);
    console.log( this.idIzRute);
  }

  getTask(id: number) {
    this.viewtaskService.getTask(id).subscribe(
      task => this.task = task,
      error => this.errorMessage = <any>error);
  }

  update():void{
   this.taskService.updateTask(this.task).subscribe( () =>{
    this.msg = "Task successfully updated."  
  }

    );
  }
}
