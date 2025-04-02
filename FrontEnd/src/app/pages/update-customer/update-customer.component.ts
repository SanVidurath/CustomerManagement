import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/CustomerService';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-customer',
  imports: [CommonModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css',
})
export class UpdateCustomerComponent implements OnInit {
  listOfCustomers: Customer[] = [];
  selectedId: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.loadCustomerData().subscribe((res) => {
      this.listOfCustomers = res;
    });
  }

  onSelected(value:string) {
    this.selectedId=value;
  }

  loadValues(){
    
  }

  submitForm() {
    const id = null;
    const name = (
      document.getElementById('name') as HTMLInputElement
    ).value.trim();
    const address = (
      document.getElementById('address') as HTMLInputElement
    ).value.trim();
    const salary = parseFloat(
      (document.getElementById('salary') as HTMLInputElement).value.trim()
    );

    if (!(name || address || salary)) {
      alert('Please fill in all fields');
      return;
    }

    console.log();

    const customerData: Customer = { id, name, address, salary };
  }
}
