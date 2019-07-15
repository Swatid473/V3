import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  ngOnInit() {
  }
// fname:string='';
// lname:string='';
// address:string='';
flag:boolean;
reactive=new FormGroup({
  fname:new FormControl('',Validators.minLength(3)),
  lname:new FormControl(''),
  address:new FormControl(''),
  home:new FormControl('home'),
  phone:new FormControl('')
});
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
if(selectedvalue=='home')
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
  console.log(this.reactive.value.fname);
}
}
