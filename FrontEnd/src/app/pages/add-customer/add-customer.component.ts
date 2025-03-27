import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-add-customer',
  imports: [],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent {
  submitForm() {
    const id=null;
    const name = (
      document.getElementById('name') as HTMLInputElement
    ).value.trim();
    const address = (
      document.getElementById('address') as HTMLInputElement
    ).value.trim();
    const salary = parseFloat((
      document.getElementById('salary') as HTMLInputElement
    ).value.trim());

    if (!(name || address || salary)) {
      alert('Please fill in all fields');
      return;
    }


    let customerData: Customer = { id, name, address, salary };
    // const customerData: Customer = new Customer( name, address, salary );

    fetch('http://localhost:8080/customer/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    })
    .then((response: Response) => {
      console.log(response);
      console.log(response.text);
      if (response.status === 201) {  // Check if customer was successfully created
        return alert('Customer added successfully!');
      } else {
        return response.text().then(errorMessage => {
          throw new Error(errorMessage || 'Failed to add customer');
        });
      }
    })
      .catch((err) => alert(err));
  }
}
