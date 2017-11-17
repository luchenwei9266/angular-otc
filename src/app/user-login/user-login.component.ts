import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }

}
