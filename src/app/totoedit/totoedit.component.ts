import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo, ITodoEdit } from '../Models/todo.models';

@Component({
  selector: 'app-totoedit',
  templateUrl: './totoedit.component.html',
  styleUrls: ['./totoedit.component.scss']
})
export class TotoeditComponent implements OnInit {

  @Input() editItem!:ITodoEdit;
  Taskname!:string;
   @Output() onUpdate=new EventEmitter<ITodoEdit>();
  constructor() { }

  ngOnInit(): void {
    this.Taskname=this.editItem.item.task;
  }

  handleClick(){
    this.onUpdate.emit({
      index:this.editItem.index,//primary key
      item:{
        createdon:new Date(),
        task:this.Taskname
      }
    })

  }
  editClick(){
    
  }
}


