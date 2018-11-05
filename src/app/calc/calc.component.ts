import { Component, OnInit } from '@angular/core';
import { Calc } from '../calc';
import { CALCS } from '../mock-calcs';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  calcs = CALCS;

  constructor() { }

  ngOnInit() {
  }

}
