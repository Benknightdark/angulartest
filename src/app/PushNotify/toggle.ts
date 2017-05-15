import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: "zippy",
  template: `

    <div>


              <h2>ToggleComponent</h2>
                <div (click)="toggle()">Toggle</div>
                  <div [hidden]="!visible">
                    ngngng
                  </div>

    </div>
    `
})
export class ToggleClass {

  visible: boolean = true;
  @Output() isToggled = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {

      this.isToggled.emit("open")
    } else {

      this.isToggled.emit("close")
    }
  }
}
