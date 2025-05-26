import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomerregisterserviceService } from '../customerregisterservice.service';

@Component({
  selector: 'app-customerregister',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private customerRegister : CustomerregisterserviceService) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['',Validators.required]
    });
  }

  onSubmit() {
  if (this.customerForm.valid) {
    this.customerRegister.postCustomerRegister1(this.customerForm.value).subscribe({
      next: (res) => {
        localStorage.setItem("userDetails",JSON.stringify(res));
        this.router.navigate(['retailer/home/documentform']);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
    
  } else {
    this.customerForm.markAllAsTouched();
    Object.keys(this.customerForm.controls).forEach(key => {
    const control = this.customerForm.get(key);
    if (control && control.invalid) {
      console.warn(`Invalid control: ${key}`, control.errors);
    }
  });
  }
  }
  
}