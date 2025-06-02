import { Component, OnInit } from '@angular/core';
import { PlanretriveService } from '../planretrive.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Customer {
  customerId: number;
  name: string;
  phoneNumber: string;
  type?: string;
}

@Component({
  selector: 'app-recharge',
  imports: [CommonModule],
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  data: any[] = [];
  customer: Customer | null = null;

  constructor(private planservice: PlanretriveService, private router: Router) {}

  ngOnInit(): void {
    
    const customerStr = sessionStorage.getItem('userDetails');
    this.customer = customerStr ? JSON.parse(customerStr) : null;

    this.planservice.getAllPlans().subscribe({
      next: (res: any[]) => {
        if (!this.customer || !this.customer.type) {
          
          this.data = res;
        } else {
          
          this.data = res.filter(plan => plan.type === this.customer!.type);
        }
      },
      error: (err) => {
        console.error('Error fetching plans:', err);
      }
    });
  }

  pay(plan: any): void {
    sessionStorage.setItem('plan', JSON.stringify(plan));
    this.router.navigate(['/retailer/home/payment']);
  }
}
