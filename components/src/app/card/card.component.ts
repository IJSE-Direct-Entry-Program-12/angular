import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  title = "Default Card Title";
  @Input()
  image = "3";
  @Output()
  onRemove = new EventEmitter();

  constructor() {
    console.log("Card Component")
  }

  remove() {
    this.onRemove.emit();
  }
}
