package edu.icet.service.custom;

import edu.icet.dto.Customer;

import java.util.List;

public interface CustomerService{

    void add(Customer customer);

    List<Customer> getAll();

    void delete(Integer id);

    void updateCustomer(Customer customer);

    Customer searchCustomerById(Integer id);

    List<Customer> searchCustomerByName(String name);

    List<Customer> searchCustomerByAddress(String address);

    List<Customer> searchCustomerBySalary(Double salary);
}
