import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-drag-and-drop',
  templateUrl: './card-drag-and-drop.component.html',
  styleUrls: ['./card-drag-and-drop.component.scss']
})
export class CardDragAndDropComponent implements OnInit {
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }

}
