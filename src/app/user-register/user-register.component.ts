import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  validateForm2: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
    _submitForm() {
      for (const i in this.validateForm2.controls) {
        this.validateForm2.controls[ i ].markAsDirty();
      }
    }

  ngOnInit() {
    this.validateForm2 = this.fb.group({
      email            : [ null, [ Validators.email ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      phoneNumber      : [ null, [ Validators.required ] ]
    });
  }

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm2.controls[ 'checkPassword' ].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm2.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  };

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  getFormControl(name) {
    return this.validateForm2.controls[ name ];
  }

}
