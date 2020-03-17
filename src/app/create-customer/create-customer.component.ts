import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
  providers: [
    CustomerService
  ]
})
export class CreateCustomerComponent implements OnInit {

  photo: File;
  firm: File;

  myform: FormGroup;
  documentType: FormControl;
  documentNumber: FormControl;
  name: FormControl;
  lastName: FormControl;
  dateBirth: FormControl;
  maritalStatus: FormControl;
  formValid = false;

  constructor(
    private customerService: CustomerService,
    public router: Router ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  public changePhoto(fileInput: any) {
    this.photo = <File>fileInput.target.files[0];
  }

  public changeFirm(fileInput: any) {
    this.firm = <File>fileInput.target.files[0];
  }

  createFormControls() { 
    this.documentType = new FormControl('', [
      Validators.required
    ]);
    this.documentNumber = new FormControl('', [
      Validators.required,
      //Validators.pattern("^[1-9]*$")
    ]);
    this.name = new FormControl('', [
      Validators.required
    ]);
    this.lastName = new FormControl('', [
      Validators.required
    ]);
    this.dateBirth = new FormControl('', [
      Validators.required
    ]);
    this.maritalStatus = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() { 
    this.myform = new FormGroup({
      documentType: this.documentType,
      documentNumber: this.documentNumber,
      name: this.name,
      lastName: this.lastName,
      dateBirth: this.dateBirth,
      maritalStatus: this.maritalStatus
    });
  }

  saveCustomer(){
    if(this.myform.valid){
      
      this.customerService.saveCustomer(this.myform).subscribe(
        resp => {
          console.log('CreateCustomerComponent - saveCustomer success');
          alert('Registro almacenado correctamente');
          this.router.navigate(['/customers']);
        },
        error => {
          console.log('CreateCustomerComponent - saveCustomer error');
      });

    }else{
      this.formValid = true;
    }
  }

}
