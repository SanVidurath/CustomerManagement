import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/CustomerService';

@Component({
  selector: 'app-search-customer',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './search-customer.component.html',
  styleUrl: './search-customer.component.css',
})
export class SearchCustomerComponent {
  searchType: string = '';
  searchValue: any = '';
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  searchCustomer() {
    if (!this.searchValue) return;

    switch (this.searchType) {
      case 'id':
        this.customerService
          .searchCustomerById(this.searchValue)
          .subscribe((res) => {
            res!==null?this.customers.push(res):this.customers=[];
            ;
          });

        break;
      case 'name':
        this.customerService
          .searchCustomerByName(this.searchValue)
          .subscribe((res) => {
            this.customers = res;
          });

        break;
      case 'address':
        this.customerService
          .searchCustomerByAddress(this.searchValue)
          .subscribe((res) => {
            this.customers = res;
          });

        break;
      case 'salary':
        this.customerService
          .searchCustomerBySalary(this.searchValue)
          .subscribe((res) => {
            this.customers = res;
          });

        break;
    }
  }
}
