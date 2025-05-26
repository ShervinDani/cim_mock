import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerform1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customerform1.component.html',
  styleUrl: './customerform1.component.css'
})
export class Customerform1Component {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private router : Router) {
    this.addressForm = this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log('Address submitted:', this.addressForm.value);
      this.router.navigate(['retailer/home/documentform'])
    } else {
      this.addressForm.markAllAsTouched(); 
    }
  }
}
