import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditStateService {
  private isEditSubject = new BehaviorSubject<boolean>(false);
  isEdit$ = this.isEditSubject.asObservable();
  private isForm = new BehaviorSubject<boolean>(false);
  isForm$ = this.isEditSubject.asObservable();
  private personId = new BehaviorSubject<number>(0);
  personId$ = this.isEditSubject.asObservable();
  private host = new BehaviorSubject<string>("");
  host$ = this.host.asObservable();


  getHost(){
    return this.host.value;
  }
  setHost(value: string){
    this.host.next(value);
  }
  setPersonId(value: number) { 
    this.personId.next(value);
  }
  getPersonId() {
    return this.personId.value;
  }
  setIsEdit(value: boolean) {
    this.isEditSubject.next(value);
  }
  getIsEdit() {
    return this.isEditSubject.value;
  }
  setIsForm(value: boolean) {
    this.isForm.next(value);
  }
  getIsForm() {
    return this.isForm.value;
  }
}
