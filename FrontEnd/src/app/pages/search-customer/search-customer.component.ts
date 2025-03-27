import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../customer.service';

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
  
    const observer = {
      next: (data: Customer | Customer[]) => this.customers = Array.isArray(data) ? data : [data],
      error: (error: any) => console.error('Error:', error)
    };
  
    switch (this.searchType) {
      case 'id':
        this.customerService.searchCustomerById(this.searchValue).subscribe(observer);
        break;
      case 'name':
        this.customerService.searchCustomerByName(this.searchValue).subscribe(observer);
        break;
      case 'address':
        this.customerService.searchCustomerByAddress(this.searchValue).subscribe(observer);
        break;
      case 'salary':
        this.customerService.searchCustomerBySalary(+this.searchValue).subscribe(observer);
        break;
    }
  }
  
}
