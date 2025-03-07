import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { CreateService } from '../services/create.service';
import { EditService } from '../services/edit.service';
import { HomeComponent } from "../home/home.component";
import { EditStateService } from '../services/edit-state.service';
import { CommonModule } from "@angular/common";
import { publicDecrypt } from "crypto";

export class Payroll {
  constructor(
    public name: string,
    public salary: string,
    public gender: string,
    public startdate: string,
    public department: string,
    public id: number,
    public note: string,
    public profilePic: string,
  ) {}
}
@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule], 
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnChanges {
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() closeForm = new EventEmitter<void>();
  @Input() editPayrollData?: Payroll | undefined = undefined;

  constructor(
    private createService: CreateService,
    private editService: EditService,
    private editStateService: EditStateService
  ) {}

  PayrollForm = new FormGroup({
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    startdate: new FormControl('', Validators.required),
    note: new FormControl(''),
    profilePic: new FormControl(''),
    department: new FormControl('')
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editPayrollData'] && this.editPayrollData) {
      // this.editStateService.setIsEdit(true); 
      this.PayrollForm.patchValue(this.editPayrollData);
    } else {
      // this.editStateService.setIsEdit(false); 
      this.PayrollForm.reset();  
    }
  }

  isEdit(){
    return this.editStateService.getIsEdit();
  }
  setForm(value: boolean){
    return this.editStateService.setIsForm(value);
  }

onSubmit() {
  if (this.isEdit()) {
    this.updatePayroll();
  } else {
    this.addNewPayroll();
  }
}

addNewPayroll() {
  if (this.PayrollForm.valid) {
    const formData = this.PayrollForm.getRawValue();
    this.createService.submitForm(formData).subscribe({
      next: (response) => {
        console.log('Form Submitted Successfully:', response);
        this.formSubmitted.emit(formData); 
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        console.log('Failed to submit form!');
      }
    });
  } else {
    console.log("Form is invalid");
  }
}


updatePayroll() {
  if (this.PayrollForm.valid) {
    const updatedData: Payroll = {
      id: this.editStateService.getPersonId(), 
      name: this.PayrollForm.value.name ?? "",
      startdate: this.PayrollForm.value.startdate ?? "",
      gender: this.PayrollForm.value.gender ?? "",
      salary: this.PayrollForm.value.salary ?? "",
      department: this.PayrollForm.value.department ?? "",
      profilePic: "string",
      note: "String"
    };
    this.editService.editData(updatedData).subscribe({
      next: (response) => {
        console.log("Payroll Updated Successfully:", response);
        this.formSubmitted.emit(updatedData);
        this.closeForm.emit(); // Close form after update
      },
      error: (error) => {
        console.error("Error updating Payroll:", error);
        console.log("Failed to update Payroll!");
      }
    });
  } else {
    console.log("Form is invalid");
  }
}


}




