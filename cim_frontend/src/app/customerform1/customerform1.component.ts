import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerregisterserviceService } from '../customerregisterservice.service';

@Component({
  selector: 'app-customerform1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customerform1.component.html',
  styleUrl: './customerform1.component.css'
})
export class Customerform1Component {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private customerRegister : CustomerregisterserviceService) {
    this.addressForm = this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      customer: [null]
    });
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log('Address submitted:', this.addressForm.value);
      this.customerRegister.postCustomerRegister2(this.addressForm.value).subscribe({
      next: (res) => {
        const customer : any = JSON.parse(localStorage.getItem("userDetail") || '{}');
        this.addressForm.patchValue({
          customer : customer
        })
        this.router.navigate(['retailer/home/addressform']);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
      this.router.navigate(['retailer/home/documentform'])
    } else {
      this.addressForm.markAllAsTouched(); 
    }
  }
}
