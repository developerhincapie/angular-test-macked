import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilService } from '../providers/util.service';
declare var encriptarCampo: any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  registerForm: FormGroup;
  digitsnumbers: any;

  constructor(public fb: FormBuilder, public _utilService: UtilService) { this.myFormRegister(); }

  onRegister() {
    console.log(this.registerForm.value);
  }

  changeDocument() {
    this.registerForm.controls['document'].setValue(this.registerForm.value.documentmask);
    this.digitsnumbers = this.registerForm.value.documentmask.substr(-2, 2);
    const documentmsk = this.registerForm.value.documentmask.replace(new RegExp('\\d', 'g'), '*').slice(0, -2);
    this.registerForm.controls['documentmask'].setValue(documentmsk + this.digitsnumbers);
  }

  sendData() {
    this.registerForm.value.document = encriptarCampo(this.registerForm.value.document);
    this._utilService.registerUser(this.registerForm.value.document)
      .subscribe((response: any) => {
        alert(response.message);
      });
  }
  private myFormRegister() {
    return this.registerForm = this.fb.group({
      'documentmask': ['', Validators.required],
      'document': ['', Validators.required],
      'name': ['', Validators.required]
    });
  }
}
