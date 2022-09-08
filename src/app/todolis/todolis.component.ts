import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../Models/todo.models';

@Component({
  selector: 'app-todolis',
  templateUrl: './todolis.component.html',
  styleUrls: ['./todolis.component.scss']
})
export class TodolisComponent implements OnInit {
//@input is used to define the input attribute
  // @Input() task:string='';
  @Input ()items:ITodo[]=[];
  constructor() { }

  ngOnInit(): void {
    // for( let i=0;i<this.items.length ;i++){

    // }
    
  }

}
