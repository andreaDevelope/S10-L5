import { Component } from '@angular/core';

@Component({
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isvue: boolean = false;

  buttonTaggle() {
    this.isvue = !this.isvue;
  }
}
