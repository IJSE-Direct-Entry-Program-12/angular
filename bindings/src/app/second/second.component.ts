import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Output("update")
  emitter: EventEmitter<string> = new EventEmitter<string>();

  updateText(value: string){
    this.emitter.emit(value);
  }
}
