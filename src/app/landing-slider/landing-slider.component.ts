import { Component, OnInit } from '@angular/core';

import { UserTypes } from '../userTypes';

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: ['./landing-slider.component.css']
})
export class LandingSliderComponent{

  userTypes = UserTypes;
}
