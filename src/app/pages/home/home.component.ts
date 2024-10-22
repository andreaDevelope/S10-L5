import { Component } from '@angular/core';
import { iTodo } from '../../moduls/i-todo';
import { TodoServiceService } from '../../services/todo-service.service';
import { SearchServiceService } from '../../services/search-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { iUsers } from '../../moduls/i-users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todoArr: iTodo[] = [];
  filteredTodos: iTodo[] = [];
  ibridUserArr: iUsers[] = [];

  constructor(
    private todoServ: TodoServiceService,
    private searchServ: SearchServiceService,
    private userServ: UserServiceService
  ) {}

  ngOnInit() {
    this.todoServ.todoArr$.subscribe((todos) => {
      this.todoArr = todos;
    });
    this.ibridUserArr = this.userServ.getUserWithTodo(this.todoArr);

    this.todoArr = this.todoServ.todoArr;
    console.log(this.ibridUserArr);

    this.searchServ.getSearchTerm().subscribe((term: string) => {
      if (term.trim() === '') {
        this.filteredTodos = [...this.todoArr];
      } else {
        this.filteredTodos = this.todoArr.filter((todo) =>
          todo.todo.toLowerCase().includes(term.toLowerCase())
        );
      }
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
