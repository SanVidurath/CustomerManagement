import { NgFor } from '@angular/common';  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-customer',
  imports: [NgFor],
  templateUrl: './get-customer.component.html',
  styleUrl: './get-customer.component.css',
})
export class GetCustomerComponent implements OnInit {
  ngOnInit(): void {
    this.getCustomerData();
  }

  public listOfCustomers: any = [];

  getCustomerData() {
    fetch('http://localhost:8080/customer/get-all')
      .then((res) => res.json())
      .then((data) => {
        this.listOfCustomers = data;
      });
  }
}
