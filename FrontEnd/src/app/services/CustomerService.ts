import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { env } from '../env/env.test';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = `${env.baseUrl}/customer`;

  constructor(private http: HttpClient) {}

  addCustomer(data: Customer) {
    return this.http.post(`${this.baseUrl}/add`, data, {
      responseType: 'text',
    });
  }

  loadCustomerData(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/get-all`);
  }

  searchCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/search-by-id/${id}`);
  }

  searchCustomerByName(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/search-by-name/${name}`);
  }

  searchCustomerByAddress(address: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${this.baseUrl}/search-by-address/${address}`
    );
  }

  searchCustomerBySalary(salary: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${this.baseUrl}/search-by-salary/${salary}`
    );
  }
}
