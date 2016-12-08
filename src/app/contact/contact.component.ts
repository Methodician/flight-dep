import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { validateEmail } from '../shared/validators/validateEmail';
import { validatePhoneNumber } from '../shared/validators/validatePhoneNumber';
import { routerTransition } from '../shared/animations/router.animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class ContactComponent implements OnInit {

  name = "*Name:";

  form: FormGroup;
  constructor(private fb: FormBuilder, private contactSvc: ContactService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, validateEmail]],
      phone: ['', validatePhoneNumber],
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  isErrorVisible(controlName: string, error: string) {
    let control = this.form.controls[controlName];
    return control.dirty && control.errors && control.errors[error];
  }

  submit() {
    this.contactSvc.submitContact(this.form.value)
      .then(
      () => {
        alert('Thank you for your interest!');
        this.form.reset();
      }
      );
  }


}
