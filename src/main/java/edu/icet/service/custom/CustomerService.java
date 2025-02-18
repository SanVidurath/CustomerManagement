package edu.icet.service.custom;

import edu.icet.dto.Customer;
import edu.icet.service.SuperService;

import java.util.List;

public interface CustomerService{

    void add(Customer customer);

    List<Customer> getAll();

    void delete(Integer id);

    void updateCustomer(Customer customer);
}
