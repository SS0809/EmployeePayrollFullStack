import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payroll } from '../home/home.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) {}


  deleteData(person: Payroll) {
    this.http.delete(environment.apiUrl + '/api/employees/' + person.id)
      .subscribe({
        next: (data) => {
          console.log('Data deleted:', data);
          // Assuming the API response includes a success message
          if (data === 'Employee deleted successfully') {
            console.log('Success: Employee deleted successfully');
            // Optionally, notify the user with a UI element, like a toast or alert
          }
        },
        error: (err) => {
          console.error('Error deleting data:', err);
          // Optionally, handle error notification
        }
      });
  }  
}
