import { Component } from '@angular/core';
import { iTodo } from '../../moduls/i-todo';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  compTodoArr: iTodo[] = [];

  constructor(private todoServ: TodoServiceService) {}

  ngOnInit() {
    this.todoServ.todoArr$.subscribe((todos) => {
      this.compTodoArr = todos.filter((todo) => todo.completed);
    });
  }
}
