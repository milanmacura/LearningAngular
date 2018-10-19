import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {ITask} from '../shared/task.model'



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  constructor( private taskService:TaskService){}

  msg:string=""

  types=[
    {id:1,name:'Daily'},
    {id:2,name:'Weekly'}
  ];

    task:ITask = {
      id:0,
      type : "",
      date : new Date(),
      description : "",
      task:"",
      time:new Date()
    }

    onSubmit(){

      this.taskService.saveTask(this.task).subscribe( () =>{
        this.msg = "Task successfully created."

      }

      );
    }





  

  


  // saveTask(formValues){
  //   this.taskService.saveTask(formValues).subscribe( ()=>    


  //   );

  // }
  ngOnInit():void {
  }

}
