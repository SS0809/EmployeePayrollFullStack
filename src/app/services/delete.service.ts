import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payroll } from '../home/home.component';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) {}


  deleteData(person: Payroll) {
  
    this.http.delete('http://localhost:8090/api/employees/'+person.id, {
    }).subscribe({
      next: (data) => {
        console.log('Data deleted:', data);
      },
      error: (err) => {
        console.error('Error deleting data:', err);
      }
    });
  }
}
