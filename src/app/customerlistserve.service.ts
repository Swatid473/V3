import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
// import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerlistserveService {
  url:string='assets/sample.json';
  _http:HttpClient;
  constructor(http:HttpClient) { 
    this._http=http;
  }
Customers():Observable<any>
{
return this._http.get(this.url);
}

}
