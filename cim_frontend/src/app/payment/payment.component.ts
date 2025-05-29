import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  plan : any;
  isNUmberNeed : boolean = true;
  ngOnInit(): void {
    const data = sessionStorage.getItem("plan");
    const customer = JSON.parse(sessionStorage.getItem("userDetails") || '{}')
    if(Object.keys(customer).length == 0)
    {
      this.isNUmberNeed = false;
    }
    if(data != null)
    {
      this.plan = JSON.parse(data);
    }

  }


}
