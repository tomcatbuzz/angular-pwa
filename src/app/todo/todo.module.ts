import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoPage } from './todo.page';
import { MaterialModule } from '../material.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPage
  },
  {
    path: ':id',
    component: TodoDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodoPage, TodoFormComponent, TodoDetailComponent],
  entryComponents: [TodoFormComponent]
})
export class TodoModule {}
