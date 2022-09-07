import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolis',
  templateUrl: './todolis.component.html',
  styleUrls: ['./todolis.component.scss']
})
export class TodolisComponent implements OnInit {
//@input is used to define the input attribute
  @Input() task:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
