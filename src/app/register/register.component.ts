import { Component, OnInit, Input } from '@angular/core';

import { User } from '../userTypes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @Input() user: User;

}
