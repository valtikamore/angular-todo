import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export interface ITodo {
  id:number
  title:string
  date: Date
  completed: boolean
}

@Injectable({providedIn:'root'})

export class TodosService {
  public todos:ITodo[] = []
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http:HttpClient) {}

  fetchTodos():Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.baseUrl}?_limit=30`)
      .pipe(tap(todos => this.todos = todos))
  }

  onToggle(id:number) {
    const idx = this.todos.findIndex(i => i.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }

  removeItem(id:number) {
    this.todos = this.todos.filter(i => i.id !== id)
  }
  addTodo(todo:ITodo) {
    this.todos.push(todo)
  }
}
