import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payroll } from '../home/home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  constructor(private http: HttpClient) {}

  editData(person: Payroll): Observable<any> {
    return this.http.put('http://localhost:8090/api/employees/'+person.id, person);
  }
}