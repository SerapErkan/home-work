import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // public modeSubject=new Subject<any>();
  public modeDataSubject$:BehaviorSubject<any>=new BehaviorSubject([]);
  modeDataSubjec=this.modeDataSubject$.asObservable();
  constructor() { }

  setMode(mode:string):void {
    localStorage.setItem("mode",mode)
    this.getMode();
  }
  getMode(){
   const data= localStorage.getItem('mode');
  //  this.modeSubject.next(data);
  this.modeDataSubject$.next(data);

  }
  clearMode(){
    localStorage.removeItem('mode');
  }
  allMode(){
    localStorage.clear();
  }
}
