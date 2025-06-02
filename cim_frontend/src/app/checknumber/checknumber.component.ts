import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Customer {
  customerId: number;
  phoneNumber: string;
  email?: string;
  address?: string;
  name?: string;
  type?: string;
}

@Component({
  selector: 'app-checknumber',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checknumber.component.html',
  styleUrls: ['./checknumber.component.css'],
})
export class ChecknumberComponent {
  phoneNumber: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  getCustomerDetailsByPhoneNumber(phoneNumber: string) {
    return this.http.get<Customer>(`http://localhost:1010/getCustomerDetailsByPhoneNumber?phoneNumber=${phoneNumber}`);
  }

  verifyNumber() {
    if (!this.phoneNumber || this.phoneNumber.trim().length < 10) {
      this.errorMessage = 'Please enter a valid mobile number.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.http
      .get<boolean>(`http://localhost:1010/checknumber?phoneNumber=${this.phoneNumber}`)
      .subscribe({
        next: (exists: boolean) => {
          if (exists) {
            this.getCustomerDetailsByPhoneNumber(this.phoneNumber).subscribe({
              next: (customer) => {
                this.isLoading = false;

                sessionStorage.setItem('userDetails', JSON.stringify(customer));

                this.router.navigate(['/retailer/home/recharge'], {
                  queryParams: { number: this.phoneNumber }
                });
              },
              error: () => {
                this.isLoading = false;
                this.errorMessage = 'Failed to load customer details.';
              }
            });
          } else {
            this.isLoading = false;
            this.errorMessage = 'Mobile number not found. Please register the customer first.';
          }
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Server error. Please try again.';
        }
      });
  }
}
