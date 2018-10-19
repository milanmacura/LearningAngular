import { Component, OnInit } from '@angular/core';
import { ViewTaskService } from 'src/app/viewtask.service';
import { ITask } from 'src/app/shared/task.model';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  tasks: ITask[] =[];
  errorMessage:string;

  constructor(private viewTaskService: ViewTaskService) { 


  }

  ngOnInit(): void {
    this.viewTaskService.getTasks().subscribe(
      tasks1=> {
          this.tasks=tasks1;
          
      },
      error=> this.errorMessage=<any> error      
  );

  }

}
