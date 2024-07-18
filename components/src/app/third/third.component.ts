import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  template: `
    <p id="p-1">
      third works!
    </p>
  `,
  styles: `
    #p-1 {
      color: red;
    }
  `
})
export class ThirdComponent {

}
