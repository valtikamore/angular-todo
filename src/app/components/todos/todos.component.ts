import {Component, OnInit} from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import {TodosService} from "../../shared/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public loading:boolean = true
  public searchString = ''

  constructor(public todoService: TodosService) {

  }

  ngOnInit(): void {
    this.todoService.fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
      this.loading = false
    })
  }

  onChange(id:number) {
    this.todoService.onToggle(id)
  }
  onRemove(id:number) {
    this.todoService.removeItem(id)
  }
}
