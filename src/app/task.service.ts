import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {ITask} from './shared/task.model'
import { Observable,of } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:65025/api/todo';

  saveTask(task){
    
    let options = {headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})};
    return this.http.post<ITask>('http://localhost:65025/api/Todo/',task,options)
    .pipe(catchError(this.handleError<ITask>('saveTask')))

  }

  updateTask(task:ITask): Observable<any>{

    let specUrl = `${this.apiUrl}/${task.id}`;

    let options = {headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})};
    return this.http.put<ITask>('http://localhost:65025/api/todo/',task,options)
    .pipe(catchError(this.handleError<ITask>('updateTask')))

      
  }

  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error:any): Observable<T> =>{
      if (!window.console) console.error(error);
      return of (result as T);
    }
  }
}
