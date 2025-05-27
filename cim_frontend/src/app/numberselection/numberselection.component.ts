import { Component, OnInit } from '@angular/core';
import { MethodService } from '../service/method.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numberselection',
  imports: [CommonModule],
  templateUrl: './numberselection.component.html',
  styleUrl: './numberselection.component.css'
})
export class NumberselectionComponent implements OnInit{

  data:any;

  constructor(private methodService : MethodService){}


  ngOnInit(): void {

    this.methodService.getActiveNumber().subscribe({
      next : (res) => {
        console.log(res);
        this.data = res;
      },
      error : (err) => {
        console.log(err);
      }
    });

  }

  selectNumber(number : any){
    window.alert("Registered");
  }

}
