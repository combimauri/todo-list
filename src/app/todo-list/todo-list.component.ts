import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  todoList: string[];

  constructor(public dialog: MatDialog) {
    this.todoList = [
      'Desayunar',
      'Lavarse los dientes'
    ];
  }

  ngOnInit() {
  }

  openCreateTodoDialog(): void {
    let dialogRef: MatDialogRef<TodoCreateComponent>
    dialogRef = this.dialog.open(TodoCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoList.push(result);
      }
    });
  }

}
