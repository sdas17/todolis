import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor() { }
  taskName: string = '';
  ngOnInit(): void {
  }
  handleAdd(tName: string) {
    this.taskName = tName

  }
}
