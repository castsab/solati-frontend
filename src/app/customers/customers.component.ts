import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [
    CustomerService
  ]
})
export class CustomersComponent implements OnInit {

  customersArray: any = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers();
  }

  public customers(){
    this.customerService.customers().subscribe(
      resp => {
        console.log('customers success');
        this.customersArray = resp;
      },
      error => {
        console.log('polls error');
    });

  }

}
