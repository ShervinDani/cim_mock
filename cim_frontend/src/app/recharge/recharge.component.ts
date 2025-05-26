import { Component, OnInit } from '@angular/core';
import { PlanretriveService } from '../planretrive.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge',
  imports: [CommonModule],
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit{

  data : any[]=[];

  constructor(private planservice : PlanretriveService, private router : Router){}

  ngOnInit(): void {
    this.planservice.getAllPlans().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
  pay(data : any) : void {
    console.log(data)
    localStorage.setItem("plan",JSON.stringify(data));
    this.router.navigate(['retailer/home/payment'])
  }
}
