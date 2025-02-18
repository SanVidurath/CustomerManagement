package edu.icet.controller;

import edu.icet.dto.Customer;
import edu.icet.service.custom.CustomerService;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@RequiredArgsConstructor
@CrossOrigin
public class CustomerController {
//http://localhost:8080/customer/add


    final CustomerService service;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addCustomer(@RequestBody Customer customer){
        service.add(customer);
    }

    @GetMapping("/get-all")
    public List<Customer> getAll(){
        return service.getAll();
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteCustomer(@PathVariable  Integer id){
        service.delete(id);
    }

    @PutMapping("/update-customer")
    public void updateCustomer(@RequestBody Customer customer){
        service.updateCustomer(customer);
    }

    @GetMapping("/search-by-id/{id}")
    public Customer searchCustomerById(@PathVariable Integer id){
        return service.searchCustomerById(id);
    }

    @GetMapping("/search-by-name/{name}")
    public List<Customer> searchCustomerByName(@PathVariable String name){
        return service.searchCustomerByName(name);
    }

    @GetMapping("/search-by-address/{address}")
    public List<Customer> searchCustomerByAddress(@PathVariable String address){
        return service.searchCustomerByAddress(address);
    }

    @GetMapping("/search-by-salary/{salary}")
    public List<Customer> searchCustomerBySalary(@PathVariable Double salary){
        return service.searchCustomerBySalary(salary);
    }
}
