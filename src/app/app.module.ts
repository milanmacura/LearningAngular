import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MenuComponent } from './menu/menu/menu.component';
import { ViewtaskComponent } from './viewtask/viewtask/viewtask.component';
import {RouterModule} from '@angular/router';
import { ViewspecifictaskComponent } from './viewspecifictask/viewspecifictask/viewspecifictask.component';





@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    MenuComponent,
    ViewtaskComponent,
    ViewspecifictaskComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    
    AngularFontAwesomeModule,
    
    HttpClientModule,
    RouterModule.forRoot([
      {path: "addTask",component: AddTaskComponent},
      {path: "viewTask",component: ViewtaskComponent},
      {path: "viewTask/:id",      
      component: ViewspecifictaskComponent},



    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
