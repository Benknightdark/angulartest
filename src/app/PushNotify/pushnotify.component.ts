import { Component,Output, EventEmitter  } from '@angular/core';
import { UserService } from '../services/getusers.service'
import { users } from './users'
import { Observable } from 'rxjs/Observable'
@Component({
    selector: "pushnotify",
    templateUrl: 'pushnotify.component.html'
})
export class PushNotifyComponent {
    showForm: any
    Users: Observable<users>;
    SelectedUser: string
    constructor(private _userService: UserService) { }
    ngOnInit() {
        this.showForm = false;
        this.Users = this._userService.getUsers()

    }
    onChange(data) {
        if (data.uid == '') {
            this.showForm = false;

        } else {
            this._userService.CheckDeviceExists(data.uid).subscribe(res => {
                this.showForm = res
                if (!this.showForm)
                    confirm("No Device Data")
            })
            this.SelectedUser = data.uid;
        }
    }
    number3=0
      onCountChanged(value) {
        this.number3 = value;
  }
  isOpen="open"
  onToggled(value){
    console.log(value)
    this.isOpen=value;
  }
}
