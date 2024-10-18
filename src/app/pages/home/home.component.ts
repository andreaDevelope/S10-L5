import { Component } from '@angular/core';
import { iTodo } from '../../moduls/i-todo';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todoArr: iTodo[] = [];

  constructor(private todoServ: TodoServiceService) {}

  ngOnInit() {
    this.todoServ.todoArr$.subscribe((todos) => {
      this.todoArr = todos;
    });
  }

  toggleCompleted(todo: iTodo) {
    todo.completed = !todo.completed;

    const updatedTodoArr = this.todoArr.map((t) =>
      t.id === todo.id ? { ...t, completed: todo.completed } : t
    );

    this.todoServ.updateTodoList(updatedTodoArr);
  }
}
