import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';
import Swal from 'sweetalert2';
import { CustomerService } from '../../services/CustomerService';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-customer',
  imports: [],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent {
  constructor(private customerService: CustomerService) {}

  submitForm(event: Event) {
    event.preventDefault();

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

    let customerData: Customer = { id, name, address, salary };

    this.customerService.addCustomer(customerData).subscribe({
      next: () => {
        Swal.fire('Success', 'Customer added successfully!', 'success');
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
