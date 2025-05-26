import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerregister',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private router : Router) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log('Form submitted:', this.customerForm.value);
      this.router.navigate(['retailer/home/addressform']);
    } else {
      this.customerForm.markAllAsTouched();
    }
  }
}
