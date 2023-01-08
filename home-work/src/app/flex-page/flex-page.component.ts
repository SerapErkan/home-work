
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStoreState } from 'src/app/store/app.state';
import { setFormModel } from '../store/form/form.actions';
import { Router } from '@angular/router';
import { FormModel, LocalStorageService } from '../libs';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-flex-page',
  templateUrl: './flex-page.component.html',
  styleUrls: ['./flex-page.component.css']
})
export class FlexPageComponent implements OnInit {
  Form!: FormGroup;
  FormModel$!: Observable<FormModel | null>
  fname!:string |undefined
  lname!:string |undefined
  password!:string |undefined
  description!:string |undefined
  color:string="";
  constructor(
    private formBuilder:FormBuilder,
    private store:Store<AppStoreState>,
    private local:LocalStorageService,
    private router:Router ) { }


  ngOnInit(): void {
    this.form();
  }

  form(){
    this.Form = this.formBuilder.group({
      fname: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      lname: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      description :new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    })
  }

  save(){
    
     const newsForm:FormModel = {
    ...this.Form.value
  }
  console.log(newsForm);

  if(!this.Form.valid)return ;
  //dispatch
  this.store.dispatch(
  setFormModel({FormModel:this.Form.value})
  )
  this.router.navigate(['twoPage']);
  }

  resetForm(){
    this.Form.reset();
    console.log(this.Form);
  }

  selection(value:string){
    this.color=value;
    console.log(this.color);
    this.local.setMode(this.color);
  }
  

 
}
