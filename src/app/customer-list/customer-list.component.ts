import { Component, OnInit,Pipe } from '@angular/core';
import {Router} from '@angular/router';
import { CustomerlistserveService } from 'src/app/customerlistserve.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  CustomerList:any;
  stars:any=4*75/5;
  ShowHideFlag:boolean=false;
  constructor(route:Router,service:CustomerlistserveService) { 
    // this.CustomerList= service.Customers();
    service.Customers().subscribe(data => {
      this.CustomerList=data;
     });
  }
  ngOnInit() {
    console.log(this.stars);
  }
  ShowImg(){
this.ShowHideFlag=!this.ShowHideFlag;
  }

  }
  // CustomerList:any=
  // [
  //   {
  //     id:1,
  //   title:"First",
  //   text:"First Demo",
    
  // },
  // {
  //   id:2,
  //   title:"Second",
  //   text:"Some Text Here"
  // },
  // {
  //   id:3,
  //   title:"Third",
  //   text:"Third Customer"
  // },
  // {
  //   id:4,
  //   title:"Fourth",
  //   text:"sdhdsgjhdgjhdg"
  // },
  // ]

