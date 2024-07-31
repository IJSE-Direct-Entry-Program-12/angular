import {Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  constructor(elmRef: ElementRef) {
    console.log(elmRef.nativeElement);
  }

  @HostListener("mousemove",['$event'])
  onClick(e: MouseEvent){
    //alert("Working");
    console.log(e.clientX, e.clientY);
  }

}
