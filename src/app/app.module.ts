import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';

var firebaseConfig = {
  apiKey: "AIzaSyDNH-fDkZSbWrVGKKXpRqrLb9zuFzDWk34",
  authDomain: "pwa-todo-list.firebaseapp.com",
  databaseURL: "https://pwa-todo-list.firebaseio.com",
  projectId: "pwa-todo-list",
  storageBucket: "pwa-todo-list.appspot.com",
  messagingSenderId: "61337747105"
};

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoCreateComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule
  ],
  entryComponents: [TodoCreateComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
