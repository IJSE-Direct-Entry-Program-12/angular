import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, ContentChild, DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit,
  AfterContentInit, AfterViewInit,
  DoCheck, AfterContentChecked, AfterViewChecked,
OnDestroy{

  static {
    console.log("0. Static Initializer");
  }

  @Input()
  myInputProperty: null | string = null;
  @ContentChild("h1")
  contentH1ElmRef!: ElementRef;
  @ViewChild("h1")
  viewH1ElmRef!: ElementRef;

  constructor() {
    console.log("1. Constructor", this.myInputProperty,
      this.contentH1ElmRef, this.viewH1ElmRef);
  }

  ngOnDestroy(): void {
    console.log("9. Destroy");
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2. OnChanges", this.myInputProperty,
      this.contentH1ElmRef, this.viewH1ElmRef);
  }

  ngOnInit(): void {
    console.log("3. OnInit", this.myInputProperty,
      this.contentH1ElmRef, this.viewH1ElmRef);
  }

  ngAfterContentInit(): void {
    console.log("5. AfterContentInit",
      this.contentH1ElmRef, this.viewH1ElmRef);
    this.contentH1ElmRef.nativeElement.style
      .backgroundColor = 'yellow';
  }

  ngAfterViewInit(): void {
    console.log("6. AfterViewInit",
      this.contentH1ElmRef, this.viewH1ElmRef);
    this.viewH1ElmRef.nativeElement.style
      .backgroundColor = 'lime';
  }

  ngDoCheck(): void {
    console.log("4. DoCheck",
      this.contentH1ElmRef, this.viewH1ElmRef);
    console.log("Content:",
      this.contentH1ElmRef?.nativeElement.innerText);
    console.log("View:",
      this.viewH1ElmRef?.nativeElement.innerText);
  }

  ngAfterContentChecked(): void {
    console.log("6. AfterContentChecked");
    console.log("Content:",
      this.contentH1ElmRef.nativeElement.innerText);
    console.log("View:",
      this.viewH1ElmRef?.nativeElement.innerText);
  }

  ngAfterViewChecked(): void {
    console.log("8. AfterViewChecked");
    console.log("View:",
      this.viewH1ElmRef?.nativeElement.innerText);
  }

  childText = Math.random().toFixed(2) + "";

  updateChildText() {
    this.childText = Math.random().toFixed(2) + "";
  }
}
