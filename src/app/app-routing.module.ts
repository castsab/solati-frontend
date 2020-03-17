import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [

  {
    path: 'create-customer', 
    component: CreateCustomerComponent
  },
  {
    path: 'customers', 
    component: CustomersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
