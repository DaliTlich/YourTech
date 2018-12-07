import { Component } from '@angular/core';

import { Log } from 'src/app/Classes/log';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  model = new Log('');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Log('');
  }
}
