import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserBusiness } from '../../model/business/user.business';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Output() saveUser: EventEmitter<UserBusiness> = new EventEmitter<UserBusiness>();

  userForm: FormGroup;
  newUser: UserBusiness;

  private nameValidator = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
  // tslint:disable-next-line: max-line-length
  private emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private builder: FormBuilder) {

    this.userForm = this.builder.group({
      name: this.builder.control('', [Validators.required, Validators.pattern(this.nameValidator)]),
      email: this.builder.control('', [Validators.required, Validators.pattern(this.emailValidator)])
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.userForm.valid) {

      this.newUser = {

        name: this.userForm.value.name,
        email: this.userForm.value.email
      };

      this.saveUser.emit(this.newUser);
    }
  }

  public isNameRequired() {
    const control = this.userForm.get('name');
    return control.errors.required;
  }

  public isFormatValid() {
    const control = this.userForm.get('name');
    return control.errors;


  }
  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }
}
