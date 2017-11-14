import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoCreateComponent implements OnInit {

  todo: string;

  constructor(public dialogRef: MatDialogRef<TodoCreateComponent>) { }

  ngOnInit() {
  }

}
