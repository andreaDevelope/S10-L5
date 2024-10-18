import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../moduls/i-todo';
import { TodoServiceService } from '../../services/todo-service.service';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  todoArr: iTodo[] = [];

  constructor(
    private todoServ: TodoServiceService,
    private usersServ: UserServiceService
  ) {}

  ngOnInit() {
    this.todoServ.todoArr$.subscribe((todos) => {
      this.todoArr = todos;
      this.todoServ.getTodoListOfUser(this.usersServ.usersArr);
    });
  }
}
