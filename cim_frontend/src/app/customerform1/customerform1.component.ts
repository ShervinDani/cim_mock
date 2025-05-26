import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerform1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customerform1.component.html',
  styleUrl: './customerform1.component.css'
})
export class Customerform1Component {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    } else {
      this.addressForm.markAllAsTouched(); 
    }
  }
}