import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: "zippy",
  template: `

    <div>


              <h2>ToggleComponent</h2>
                <div (click)="toggle()">Toggle</div>
                  <div *ngIf="visible">
                    ngngng
                  </div>

    </div>
    `
})
export class ToggleClass {

  @Input() visible: boolean
  @Output() isToggled = new EventEmitter();

  toggle() {
    this.isToggled.emit(!this.visible)
  }
}
