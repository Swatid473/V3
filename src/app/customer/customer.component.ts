import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
CustomerList:any=
[
  {
  title:"First",
  text:"First Demo"
},
{
  title:"Second",
  text:"Some Text Here"
},
{
  title:"Third",
  text:"Third Customer"
},
{
  title:"Fourth",
  text:"sdhdsgjhdgjhdg"
},
]
}
