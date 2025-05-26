import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RechargeComponent } from './recharge/recharge.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { StatustrackingComponent } from './statustracking/statustracking.component';
import { PaymentComponent } from './payment/payment.component';
import { Customerform1Component } from './customerform1/customerform1.component';

export const routes: Routes = [
  {
    path: 'retailer/home',
    component: HeaderComponent,
    children: [
      { path: 'recharge', component: RechargeComponent },
      { path: '', component: RechargeComponent },
      { path: 'customerregister', component: CustomerregisterComponent },
      { path: 'status', component: StatustrackingComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'addressform', component: Customerform1Component}
    ]
  }
];
