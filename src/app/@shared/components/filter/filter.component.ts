import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }
changeValue(event:any){
  this.newItemEvent.emit(event.target.value)
  // console.log(event.target.value)
}
}
