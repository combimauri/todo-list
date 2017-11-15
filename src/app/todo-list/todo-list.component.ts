import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';

import { TodoCreateComponent } from '../todo-create/todo-create.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  todos: Observable<any[]>;
  todosRef: AngularFireList<any>;

  constructor(public dialog: MatDialog, public database: AngularFireDatabase) {
    this.todosRef = this.database.list('todos');
    this.todos = this.todosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
  }

  openCreateTodoDialog(): void {
    let dialogRef: MatDialogRef<TodoCreateComponent>
    dialogRef = this.dialog.open(TodoCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todosRef.push({
          detail: result,
          selected: false
        });
      }
    });
  }

  updateTodoSelectedStatus(todo): void {
    this.todosRef.update(todo.key, {
      selected: !todo.selected
    });
  }

}
