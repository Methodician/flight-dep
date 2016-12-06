import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private contactSvc: ContactService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [],
      message: []
    })
  }

  ngOnInit() {
  }

  isErrorVisible(controlName: string, error: string) {
    let control = this.form.controls[controlName];
    return control.dirty && control.errors && control.errors[error];
  }

  submit() {
    this.contactSvc.submitContact(this.form.value);
  }


}
