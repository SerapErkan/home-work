import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../libs';

@Component({
  selector: 'layout-one',
  templateUrl: './layout-one.component.html',
  styleUrls: ['./layout-one.component.css']
})
export class LayoutOneComponent implements OnInit {

  bgcolor$:any;
  
  constructor(private local:LocalStorageService) {
  // I-yol
  // local.modeSubject.subscribe(data=>{
  //  this.color=data;
  // });
  this.bgcolor$=local.modeDataSubjec;
   }
   ngOnInit(): void {

   }

}
