import { Component } from '@angular/core';
import { iTodo } from '../../moduls/i-todo';
import { TodoServiceService } from '../../services/todo-service.service';
import { ControlService } from '../../services/control.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  compTodoArr: iTodo[] = [];
  isLoading: boolean = true;

  constructor(
    private todoServ: TodoServiceService,
    private controlServ: ControlService
  ) {}

  ngOnInit() {
    this.todoServ.todoArr$.subscribe((todos) => {
      this.compTodoArr = todos.filter((todo) => todo.completed);
    });
    this.isLoading = this.controlServ.isLoading;
    // this.controlServ.loading(this.compTodoArr);
  }
}
