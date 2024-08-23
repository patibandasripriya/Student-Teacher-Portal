
import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

let validationErrors: { [key: string]: any };


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm:FormGroup
  name: string = '';
  email: string = '';
  address: string = '';
  role: string = 'student';

  constructor(private dataservice: DataService, private formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: ['', Validators.required],
      role: ['', Validators.required]
    });
  }



  onSubmit() {
    console.log("data here: ",this.registerForm.controls);
    this.name=this.registerForm.get('name')?.value;
    this.email=this.registerForm.get('email')?.value;
    this.address=this.registerForm.get('address')?.value;
    this.role=this.registerForm.get('role')?.value;
    const record = { name: this.name, email: this.email, address: this.address };
    this.dataservice.addRecord(record, this.role).subscribe();
  }
}

// src/app/register/register.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.registerForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       address: ['', Validators.required],
//       role: ['student', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log(this.registerForm.value);
//       // Call your API to store data
//     }
//   }
// }

