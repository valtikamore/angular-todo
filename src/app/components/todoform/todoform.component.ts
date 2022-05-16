import { Component, OnInit } from '@angular/core';
import {ITodo, TodosService} from "../../shared/todos.service";

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  public todoTitle = ''

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo() {
    if(this.todoTitle === '') return
    const todo: ITodo = {
      id: Date.now(),
      title: this.todoTitle,
      completed: false,
      date: new Date()
    }
    this.todosService.addTodo(todo)
    this.todoTitle = ''
  }
}
