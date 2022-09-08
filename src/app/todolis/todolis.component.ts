import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
//Delete event
  @Output() onDelte=new EventEmitter<number>();
//EDIT EVENT
@Output() onEDIT=new EventEmitter<number>();

  constructor() { }
  ngOnInit(): void {
    // for( let i=0;i<this.items.length ;i++){

    // }
    
  }
  handledelte(index:number){
    // console.log(this.items[index])
    if (confirm('Do you wantdelete?')) {
this.onDelte.emit(index)
      
    }

  }
  handldELETE(index:number){
    // console.log(this.items[index])
   this.onEDIT.emit(index)

  }
}
