import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { iUsers } from '../../moduls/i-users';
import { iTodo } from '../../moduls/i-todo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  todoArr: iTodo[] = [];

  ibridUsers: iUsers[] = [];

  constructor(
    private todoServ: TodoServiceService,
    private usersServ: UserServiceService
  ) {}

  // in vista vedo i todo solo del 4

  ngOnInit() {
    this.todoArr = this.todoServ.todoArr;
    console.log(this.getIbridUsers());
  }

  getIbridUsers() {
    return (this.ibridUsers = this.usersServ.getUserWithTodo(this.todoArr));
  }
}
