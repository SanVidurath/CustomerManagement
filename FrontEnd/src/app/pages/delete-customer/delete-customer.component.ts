import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/CustomerService';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-customer',
  imports: [CommonModule],
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css',
})
export class DeleteCustomerComponent {
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

    if (this.selectedId === '') {
      Swal.fire('Error', 'ID has to be selected', 'error');
      return;
    }

    const id = parseInt(this.selectedId);

    Swal.fire({
      title: 'Delete Customer?',
      text: 'Do you want to delete this customer?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService
          .deletCustomer(id)
          .subscribe((res) =>
            Swal.fire('Success', `${JSON.parse(res).message}`, 'success')
          );
      }
    });
  }
}
