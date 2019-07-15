import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
reactive:FormGroup;
  constructor(public fb:FormBuilder) { 
    this.reactive=new FormGroup({
      fname:new FormControl('',Validators.required),
      lname:new FormControl(''),
      address:new FormControl(''),
      home:new FormControl('home'),
      phone:new FormControl('')
    });
  }

  ngOnInit() {
  }
// fname:string='';
// lname:string='';
// address:string='';
flag:boolean;

//form builder code
// formbuilder=this.fb.group(
//   {
//     firstname:'',//default parameter
//     lastname:{value:'n/a or true',disabled:true}, //to be displayed in the from group object or not
//     fullname:['fdg',Validators.required],//array for default values,validation as we do in form control
//   }
// );
//set and remove validators at runtime
radiobuttonclicked(selectedvalue:string):void
{
if(selectedvalue=='option1')
{
 this.reactive.controls.phone.setValidators(Validators.required)
}
else
{
  this.reactive.controls.phone.clearValidators();
}
this.reactive.controls.phone.updateValueAndValidity();
}
OnSubmit()
{
  console.log(this.reactive.controls.fname.valid);
}
}
