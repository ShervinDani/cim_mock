import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerregisterserviceService {

  private customerRegister1Url = 'http://localhost:1010/registerNewCustomer';

  constructor(private http : HttpClient) { }

  postCustomerRegister(data : any) : Observable<any> {
    return this.http.post(this.customerRegister1Url, data);
  }

}
