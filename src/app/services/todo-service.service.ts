import { Injectable } from '@angular/core';
import { iTodo } from '../moduls/i-todo';
import { iUsers } from '../moduls/i-users';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todoArr: iTodo[] = [
    {
      id: 1,
      todo: 'Do something nice for someone I care about',
      completed: true,
      userId: 26,
    },
    {
      id: 2,
      todo: 'Memorize the fifty states and their capitals',
      completed: false,
      userId: 48,
    },
    { id: 3, todo: 'Watch a classic movie', completed: false, userId: 4 },
    {
      id: 4,
      todo: 'Contribute code or a monetary donation to an open-source software project',
      completed: false,
      userId: 48,
    },
    { id: 5, todo: 'Solve a Rubik’s cube', completed: false, userId: 31 },
    {
      id: 6,
      todo: 'Bake pastries for me and neighbor',
      completed: false,
      userId: 39,
    },
    {
      id: 7,
      todo: 'Go see a Broadway production',
      completed: false,
      userId: 32,
    },
    {
      id: 8,
      todo: 'Write a thank you letter to an influential person in my life',
      completed: true,
      userId: 13,
    },
    {
      id: 9,
      todo: 'Invite some friends over for a game night',
      completed: false,
      userId: 47,
    },
    {
      id: 10,
      todo: 'Have a football scrimmage with some friends',
      completed: false,
      userId: 19,
    },
    { id: 147, todo: 'Use DummyJSON', completed: false, userId: 29 },
    { id: 148, todo: 'Hug Mom :)', completed: false, userId: 30 },
    { id: 149, todo: 'Play cricket', completed: false, userId: 31 },
    {
      id: 150,
      todo: 'Sleeeeep for the whole day!!!',
      completed: false,
      userId: 32,
    },
  ];

  completedTodoArr: iTodo[] = this.todoArr.filter((todo) => todo.completed);
  constructor() {}

  getTodoListOfUser(users: iUsers[]): void {
    const todosWithUsers = this.todoArr.map((todo) => {
      const foundUser = users.find((user) => user.id === todo.userId);
      if (foundUser) {
        return { ...todo, userName: foundUser.firstName };
      }
      return todo;
    });

    this.todoArr = todosWithUsers;
  }
}
