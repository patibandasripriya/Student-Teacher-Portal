// src/app/components/register/register.component.ts
import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  role: string = 'student';

  constructor(private dataservice : DataService) {}

  onSubmit() {
    const record = { name: this.name, email: this.email, address: this.address };
    this.dataservice.addRecord(record, this.role).subscribe();
  }
}
