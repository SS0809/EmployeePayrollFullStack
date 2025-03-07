import { Component } from '@angular/core';
import { GetService } from '../services/get.service';
import { DeleteService } from '../services/delete.service';
import { EditService } from '../services/edit.service';
import { CommonModule } from '@angular/common';
import { FormComponentComponent } from '../form-component/form-component.component';
import { EditStateService } from '../services/edit-state.service';

export interface Payroll {
  name: string;
  salary: string;
  gender: string;
  startdate: string;
  department: string;
  note: string,
  profilePic: string,
  id: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,FormComponentComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedPayroll: Payroll | undefined = undefined;
  Payrolls: Map<number, Payroll> = new Map();


  constructor(
    private getService: GetService,
    private editService: EditService,
    private deleteService: DeleteService,
    private editStateService: EditStateService
  ) {
    this.fetchData();
  }

  openForm() {
    this.editStateService.setIsForm(true);
  }

  closeForm() {
    this.editStateService.setIsForm(false);
  }
  setEdit(value: boolean){
    this.editStateService.setIsEdit(value);
  }
  getEdit(){
    return this.editStateService.getIsEdit();
  }
  getForm(){
    return this.editStateService.getIsForm();
  }
  fetchData() {
    this.getService.getData().subscribe({
      next: (data: Payroll[]) => {
        this.Payrolls = new Map(data.map(Payroll => [Payroll.id, Payroll]));
        console.log('Data received:', this.Payrolls);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }

  addNewPerson(person: Payroll) {
    this.Payrolls.set(person.id,person);
    this.closeForm();
  }

  deletePayroll(person: Payroll) {
    this.deleteService.deleteData(person);
    this.Payrolls.delete(person.id);
  }
  
  editPayroll(person: Payroll) {
    this.selectedPayroll = { ...person }; 
    this.editStateService.setPersonId(person.id);
    this.openForm();
  }
  updatePayroll() {
    if (!this.selectedPayroll) {
      console.error("Error: No Payroll selected for update.");
      return; 
    }
    this.Payrolls.set(this.selectedPayroll.id, this.selectedPayroll);
    this.editService.editData(this.selectedPayroll).subscribe({
      next: (response) => {
        console.log('Payroll updated:', response);
        this.fetchData(); 
        this.closeForm();
      },
      error: (error) => {
        console.error('Error updating Payroll:', error);
      }
    });
  }
}
