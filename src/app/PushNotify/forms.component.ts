import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../services/getusers.service'
import { notify } from './notify'
@Component({
  selector: "forms",
  templateUrl: 'forms.component.html'
})
export class FormsComponent {
  @Input() SelectedUser;
  @Input() SelectedUserName;
  form: FormGroup;
  notify: notify;
  UserArray:string[]=[];
  ButtonCallBack: string = "";;
  ButtonText: string
  PushStatus: string

  constructor(private fb: FormBuilder, private _userService: UserService) {
    this.form = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],
    })

  }
  ngOnInit() {
    this.ButtonText = "Submit"

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  onSubmit() {
    this.ButtonText = "Submitting"
    this.ButtonCallBack = "disabled";
    this.form.value.uid = this.SelectedUser
    this.PushStatus = "";
    this.UserArray.push(this.SelectedUser)
    console.log(this.UserArray)
    this.notify = {
    uid:this.UserArray,
    title:this.form.value.title,
    body:this.form.value.body
   //   uid: this.SelectedUser,
    //  title: this.form.value.title
     // , body: this.form.value.body
    }

    console.log(this.notify)
    this._userService.PushNotifyToDevice(this.notify
    ).subscribe(
      res => {console.log(res);  this.PushStatus = res.statusText },

      (error: any) => { this.PushStatus = error.statusText },

      () => { this.ButtonText = "Submit"; this.ButtonCallBack = "" ;this.UserArray=[];})
  }
  @Input() count: number;
  @Output() countChange = new EventEmitter();
  increment() {
    this.count++;
    this.countChange.emit(this.count
    );
  }
}
