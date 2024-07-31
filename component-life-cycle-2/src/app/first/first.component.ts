import {AfterViewInit, Component, ContentChildren, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements AfterViewInit {

  // @ViewChild("h2")
  // viewH2ElmRef!: ElementRef;
  // @ContentChild("h2")
  // contentH2ElmRef!: ElementRef;
  @ViewChildren("h2")
  viewH2Elms!: QueryList<ElementRef>
  @ContentChildren("h2")
  contentH2Elms!: QueryList<ElementRef>

  ngAfterViewInit(): void {
    this.contentH2Elms.forEach(elm => {
      elm.nativeElement.style.backgroundColor = 'lightblue'
    });
    this.viewH2Elms.forEach(elm => {
      elm.nativeElement.style.backgroundColor = 'orange';
    });
    // this.viewH2ElmRef.nativeElement.
    //   style.backgroundColor = 'lightblue';
    // this.contentH2ElmRef.nativeElement
    //   .style.backgroundColor = 'orange';
  }

}
