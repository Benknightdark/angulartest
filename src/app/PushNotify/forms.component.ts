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
    form: FormGroup;
    notify: notify[] = [];
    ButtonCallBack: string = "";;
    ButtonText: string
    PushStatus:string
    constructor(private fb: FormBuilder, private _userService: UserService) {


    }
    ngOnInit() {
        this.ButtonText = "Submit"
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.form = this.fb.group({
            title: ['', Validators.compose([Validators.required])],
            body: ['', Validators.compose([Validators.required])],
        })
    }
    onSubmit() {
        this.ButtonText = "Submitting"
        this.ButtonCallBack = "disabled";
        this.form.value.uid = this.SelectedUser
        this.PushStatus="";
        // console.log(this.form.value)     
        this._userService.PushNotifySingleDevice(this.form.value).subscribe(res => { 
            
            this.PushStatus= res.statusText     
            this.ButtonText = "Submit"
            this.ButtonCallBack = ""
        }
        )

    }

    @Input() count: number;
    @Output() countChange = new EventEmitter();
    aa;
    increment() {
        this.count++;
        this.countChange.emit(this.count
        );
    }
}