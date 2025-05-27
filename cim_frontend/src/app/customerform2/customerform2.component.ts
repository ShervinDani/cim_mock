import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerregisterserviceService } from '../customerregisterservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerform2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customerform2.component.html',
  styleUrls: ['./customerform2.component.css']
})
export class Customerform2Component {
  imageFile!: File;
  pdfFile!: File;

  constructor(private router : Router, private customerService: CustomerregisterserviceService) {}

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && file.type.startsWith('image/')) {
      this.imageFile = file;
    }
  }

  onDocumentSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.pdfFile = file;
    }
  }

  onSubmit(event?: Event): void {
    if (event) event.preventDefault();

    if (!this.imageFile || !this.pdfFile) {
      alert('Please upload both image and document before submitting.');
      return;
    }

    const customer = JSON.parse(localStorage.getItem('userDetails') || '{}');

    const formData = new FormData();
    formData.append('image', this.imageFile);
    formData.append('pdf', this.pdfFile);
    formData.append('customer', new Blob([JSON.stringify(customer)], { type: 'application/json' }));

    this.customerService.postCustomerRegister2(formData).subscribe({
      next: (res) => {
        console.log('Response:', res);
        alert('Document submitted successfully!');
        this.router.navigate(['retailer/home/numberselection']);
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Error submitting document.');
      }
    });
  }

  preventFormSubmit(event: Event): void {
    event.preventDefault();
  }
}
