import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { iUsers } from '../../moduls/i-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  todoArr: iUsers[] = [];

  constructor(
    private todoServ: TodoServiceService,
    private usersServ: UserServiceService
  ) {}

  ngOnInit() {
    this.todoServ.todoArr$.subscribe((todos) => {
      this.todoArr = this.usersServ.getUserWithToDo(todos);
      console.log(this.todoArr);
    });
  }
}
