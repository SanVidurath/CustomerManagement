import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/CustomerService';

@Component({
  selector: 'app-get-customer',
  imports: [CommonModule],
  templateUrl: './get-customer.component.html',
  styleUrl: './get-customer.component.css',
})
export class GetCustomerComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCustomerData();
  }

  listOfCustomers: Customer[] = [];

  getCustomerData() {
    this.customerService.loadCustomerData().subscribe((res) => {
      this.listOfCustomers = res;
    });

    // this.http.get<Customer[]>('http://localhost:8080/customer/get-all').subscribe((res) => {
    //   this.listOfCustomers=res;
    // });

    // fetch('http://localhost:8080/customer/get-all')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.listOfCustomers = data;
    //   });
  }
}
