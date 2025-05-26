import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  plan : any;
  constructor(){}
  ngOnInit(): void {

    const data = localStorage.getItem("plan");
    if(data != null)
    {
      this.plan = JSON.parse(data);
    }

  }


}
