import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private baseUrl = "http://localhost/8080/customer";

  constructor(private http:HttpClient) { }

  searchCustomerById(id:number): Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/search-by-id/${id}`);
  }

  searchCustomerByName(name:string): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/search-by-name/${name}`);
  }

  searchCustomerByAddress(address:string): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/search-by-address/${address}`);
  }

  searchCustomerBySalary(salary:number): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseUrl}/search-by-salary/${salary}`);
  }
}
