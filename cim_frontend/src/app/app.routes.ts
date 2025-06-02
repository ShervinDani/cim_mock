import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RechargeComponent } from './recharge/recharge.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { StatustrackingComponent } from './statustracking/statustracking.component';
import { PaymentComponent } from './payment/payment.component';
import { Customerform2Component } from './customerform2/customerform2.component';
import { NumberselectionComponent } from './numberselection/numberselection.component';
import { ChecknumberComponent } from './checknumber/checknumber.component';

export const routes: Routes = [
  {
    path: 'retailer/home',
    component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'checknumber', pathMatch: 'full' },   // redirect base path to checknumber
      { path: 'checknumber', component: ChecknumberComponent },
      { path: 'recharge', component: RechargeComponent },
      { path: 'customerregister', component: CustomerregisterComponent },
      { path: 'status', component: StatustrackingComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'documentform', component: Customerform2Component },
      { path: 'numberselection', component: NumberselectionComponent },
    ],
  },
];

// export const routes: Routes = [
//   {
//     path: 'retailer/home',
//     component: HeaderComponent,
//     children: [
//       { path: 'recharge', component: RechargeComponent },
//       { path: '', component: RechargeComponent },
//       { path: 'customerregister', component: CustomerregisterComponent },
//       { path: 'status', component: StatustrackingComponent },
//       { path: 'payment', component: PaymentComponent },
//       { path: 'documentform', component: Customerform2Component },
//       { path: 'numberselection', component: NumberselectionComponent },
//       { path: 'checknumber', component: ChecknumberComponent },
//     ]
//   }
// ];