import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormModel } from 'src/app/libs';
import { AppStoreState } from 'src/app/store/app.state';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  FormModel$!:Observable<FormModel | null>
  description:string|undefined
  fname:string|undefined
  lname:string|undefined
  password:string|undefined

  constructor(  private store:Store<AppStoreState>, private router:Router) { }

  ngOnInit(): void {
      this.FormModel$= this.store.select((s) => s.form.FormModel);
      //  console.log(this.UserModel$);
      this.FormModel$.subscribe((s)=>{
        this.lname=s?.lname
        this.password=s?.password
        this.fname=s?.fname
        this.description=s?.description
      }
      )}

      goTo(){

        this.router.navigate(["/"]);
    
      }

}
