import { TodoServiceService } from './todo-service.service';
import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { iTodo } from '../moduls/i-todo';
import { iUsers } from '../moduls/i-users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  isLoading: boolean = true;
  constructor() {}

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}
