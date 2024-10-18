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
    this.todoArr = this.todoServ.todoArr;
  }
}
