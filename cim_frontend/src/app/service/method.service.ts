import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  private numberSelectUrl = 'http://localhost:1010/getAllActiveNumber';

  constructor(private http : HttpClient) { }

  getActiveNumber() : Observable<any>{
    return this.http.get(this.numberSelectUrl);
  }

}
