import { Component, OnInit } from '@angular/core';
import { ITodo } from '../Models/todo.models';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  //defince a blank array
  items:ITodo[]=[];
  constructor() { }
  taskName: string = '';
  ngOnInit(): void {
  }
  handleAdd(tName: string) {
    this.taskName = tName
//check duplicate
//add the items
this.items.push({
  task:this.taskName,
  createdon: new Date()
});
console.log(this.items)
  }
}
