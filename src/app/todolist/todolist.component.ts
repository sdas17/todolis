import { Component, OnInit } from '@angular/core';
import { ITodo, ITodoEdit } from '../Models/todo.models';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  //defince a blank array
  items: ITodo[] = [];
  editItem!: ITodoEdit;
  constructor() { }
  taskName: string = '';
  ngOnInit(): void {
  }
  handleAdd(tName: string) {
    this.taskName = tName
    //check duplicate
    //add the items
    this.items.push({
      task: this.taskName,
      createdon: new Date()
    });
    console.log(this.items)
  }
  handledelter(index: number) {
    //delete the items
    this.items.splice(index, 1);
  }
  handleedit(index: number) {
    //asigning the edit items
    this.editItem={
      index:index,
      item: this.items[index]
    }
   
    console.log(this.editItem)
  }
  handleUpdate(modal :ITodoEdit){
    //update existing velue
    this.items[modal.index]= modal.item;
    //clear the edit
    this.editItem!=null;
  }
}
