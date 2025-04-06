import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/CustomerService';
import Swal from 'sweetalert2';
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
  customer = <Customer | null>{};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.loadCustomerData().subscribe((res) => {
      this.listOfCustomers = res;
    });
  }

  onSelected(value: string) {
    this.selectedId = value;
    this.customerService
      .searchCustomerById(parseInt(this.selectedId))
      .subscribe((res) => (this.customer = res));
  }


  submitForm(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const id = parseInt(this.selectedId);
    const name = (
      document.getElementById('name') as HTMLInputElement
    ).value.trim();
    const address = (
      document.getElementById('address') as HTMLInputElement
    ).value.trim();
    const salary = parseFloat(
      (document.getElementById('salary') as HTMLInputElement).value.trim()
    );

    if (this.selectedId===''||!(name || address || salary)) {
      Swal.fire('Error', 'Please fill in all fields', 'error');
      return;
    }

    const customerData: Customer = { id, name, address, salary };

    this.customerService.updateCustomer(customerData).subscribe({
      next: () => {
        Swal.fire('Success', 'Customer updated successfully!', 'success');
      },
      error: (err) => {
        if (err.status === 400 && err.error) {
          let errorMessage = '';

          let errorObj;
          try {
            errorObj =
              typeof err.error === 'string' ? JSON.parse(err.error) : err.error;
          } catch (e) {
            console.error('Error parsing JSON:', e);
            errorObj = {};
          }

          if (typeof errorObj === 'object' && errorObj !== null) {
            errorMessage = Object.values(errorObj).join('<br>');
          } else {
            errorMessage = 'An unexpected error occurred';
          }

          Swal.fire('Error', errorMessage.trim(), 'error');
        } else {
          Swal.fire(
            'Error',
            'Something went wrong. Please try again.',
            'error'
          );
        }
      },
    });
  }
}
