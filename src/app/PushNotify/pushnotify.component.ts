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
    SelectedUserName:string
    constructor(private _userService: UserService) { }
    ngOnInit() {
        this.showForm = false;
        this.Users = this._userService.getUsers()

    }
    onChange(data) {

        if (data.uid.value == '') {
            this.showForm = false;

        } else {
            this._userService.CheckDeviceExists(data.uid.value).subscribe(res => {
                this.showForm = res
                if (!this.showForm)
                    confirm("No Device Data")
            })
            this.SelectedUser =data.uid.value
            this.SelectedUserName= data.uid.options[data.uid.options.selectedIndex].text;
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
