import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http'
import {ITask} from './shared/task.model'
import { Observable,of,throwError } from 'rxjs';
import {catchError, tap, map} from "rxjs/operators"





@Injectable({
  providedIn: 'root'
})
export class ViewTaskService {

    apiUrl = 'http://localhost:65025/api/todo';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
        
    return this.http.get<ITask[]>(this.apiUrl).pipe(
        tap(data => console.log('All'+ JSON.stringify(data))),
        catchError(this.handleError)
    );
}

getTask(id: number): Observable<ITask> {
    
    let specUrl = `${this.apiUrl}/${id}`;

    return this.http.get<ITask>(specUrl).pipe(
        tap(data => console.log(`Selected task'+ ${JSON.stringify(data)}`),
        catchError(this.handleError))
    );
  }




private handleError(err:HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
        errorMessage = `Error occured ${err.error.message}`;
    
    }
    else{
        errorMessage = `Server returned code:${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

}



//   private handleError<T>(operation = 'operation', result?: T)
//   {
//     return (error:any): Observable<T> =>{
//       if (!window.console) console.error(error);
//       return of (result as T);
//     }
//   }
}
