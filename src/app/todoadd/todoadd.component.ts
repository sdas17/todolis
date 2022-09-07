import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.scss']
})
export class TodoaddComponent implements OnInit {
  //define a varible which is store data 
  taskName: string = '';
//output is used to ,out the data from this component out side component
//output is used to create custom event

  @Output() onAdd = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addtask() {
    //sys.out.print
  //  console.log(this.taskName)
   this.onAdd.emit(this.taskName)

  }
}
