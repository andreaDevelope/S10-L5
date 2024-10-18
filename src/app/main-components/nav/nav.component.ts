import { Component } from '@angular/core';
import { iTodo } from '../../moduls/i-todo';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isvue: boolean = false;
  todoArr: iTodo[] = [];

  searchTerm: string = '';
  filteredTodos: iTodo[] = [];

  constructor(private todoServ: TodoServiceService) {}

  ngOnInit() {
    this.todoArr = this.todoServ.todoArr;
    this.filteredTodos = [...this.todoArr];
  }

  buttonTaggle() {
    this.isvue = !this.isvue;
  }

  searchTodos(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredTodos = [...this.todoArr];
    } else {
      this.filteredTodos = this.todoArr.filter((todo) =>
        todo.todo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
