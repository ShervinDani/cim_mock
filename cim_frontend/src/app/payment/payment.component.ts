
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-payment',
//   imports: [],
//   templateUrl: './payment.component.html',
//   styleUrl: './payment.component.css'
// })
// export class PaymentComponent implements OnInit {
//   plan : any;
//   isNUmberNeed : boolean = true;
//   ngOnInit(): void {
//     const data = sessionStorage.getItem("plan");
//     const customer = JSON.parse(sessionStorage.getItem("userDetails") || '{}')
//     if(Object.keys(customer).length == 0)
//     {
//       this.isNUmberNeed = false;
//     }
//     if(data != null)
//     {
//       this.plan = JSON.parse(data);
//     }

//   }


// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  plan: any;
  customer: any = {};
  isCustomerAvailable: boolean = true;
  paymentSuccess: boolean = false;
  loading: boolean = false; // 🛠️ This resolves your error

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const planData = sessionStorage.getItem("plan");
    const customerData = sessionStorage.getItem("userDetails");

    if (planData) {
      this.plan = JSON.parse(planData);
    }

    if (customerData) {
      this.customer = JSON.parse(customerData);
      this.isCustomerAvailable = true;
    } else {
      this.isCustomerAvailable = false;
    }
  }

  payAndSubmit(): void {
    if (!this.plan || !this.customer?.customerId) {
      alert('Missing plan or customer information.');
      return;
    }

    const payload = {
      customerId: this.customer.customerId,
      planId: this.plan.id,
      amount: this.plan.price
    };

    this.loading = true;

    this.http.post('http://localhost:1010/submit', payload).subscribe({
      next: (res) => {
        console.log('Payment submitted:', res);
        this.paymentSuccess = true;
        this.loading = false;
      },
      error: (err) => {
        console.error('Payment failed:', err);
        alert('Payment failed. Please try again.');
        this.loading = false;
      }
    });
  }
}
