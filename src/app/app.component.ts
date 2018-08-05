import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  registerForm: FormGroup;

  constructor(public fb: FormBuilder) { this.myFormRegister(); }

  onRegister() {
    console.log(this.registerForm.value);
  }

  changeDocument() {
    this.registerForm.controls['document'].setValue(this.registerForm.value.documentmask);
    const digitsnumbers = this.registerForm.value.documentmask.substr(-2, 2);
    const documentmsk = this.registerForm.value.documentmask.replace(new RegExp('\\d', 'g'), '*').slice(0, -2);
    this.registerForm.controls['documentmask'].setValue(documentmsk + digitsnumbers);
  }

  private myFormRegister() {
    return this.registerForm = this.fb.group({
      'documentmask': ['', Validators.required],
      'document': ['', Validators.required],
      'name': ['', Validators.required]
    });
  }
}
