import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import {Cust,Demo} from 'src/app/Cust'
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  id:any;
  name:string='';
  desc:string='';
  imgUrl:string='';
  price:number;
  quantity:number;
  _route: ActivatedRoute;
  url:string='assets/sample.json';
_http:HttpClient;
 test=Demo(1);
//  arr:Array<string>=['a','b'];
  constructor(route: ActivatedRoute,http:HttpClient) {
    this._route = route;
    this._http=http;
  }

  ngOnInit() {
    // this.id = this._route.snapshot.paramMap.get('id');
    // this._route.params.subscribe(
    //   (params: Params) => {
    //     this.id = params['id'];
    //   }
    // )
    // this._http.get(this.url).subscribe(
    //   (data)=>{
    //     for(let d of data)
    //     {
    //       if(d.id==this._route.snapshot.paramMap.get('id'))
    //       {
    //     this.id=d.id;
    //     this.name=d.title;
    //     this.desc=d.text;
    //     this.imgUrl=d.img;
    //     this.price=d.price;
    //     this.quantity=d.quantity;
    //       }
    //     }
    //   }
    // );
    // console.log(this.name);
    // this.name=this._route.snapshot.paramMap.get('id');
  }
}
   


