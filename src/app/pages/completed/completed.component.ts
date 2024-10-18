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
    this.compTodoArr = this.todoServ.completedTodoArr;
  }
}
