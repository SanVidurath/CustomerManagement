package edu.icet.service.custom.impl;

import edu.icet.dto.Customer;
import edu.icet.entity.CustomerEntity;
import edu.icet.repository.custom.CustomerRepository;
import edu.icet.service.custom.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    final CustomerRepository repository;
    final ModelMapper mapper;

    @Override
    public void add(Customer customer) {
        CustomerEntity customerEntity = mapper.map(customer, CustomerEntity.class);
        repository.save(customerEntity);
    }

    @Override
    public List<Customer> getAll() {
        ArrayList<Customer> customerList = new ArrayList<>();
        List<CustomerEntity> all = repository.findAll();

        all.forEach(customerEntity ->
                customerList.add(mapper.map(customerEntity, Customer.class)));

        return customerList;
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void updateCustomer(Customer customer) {
        repository.save(mapper.map(customer, CustomerEntity.class));
    }

    @Override
    public Customer searchCustomerById(Integer id) {
        return mapper.map(repository.findById(id), Customer.class);
    }

    @Override
    public List<Customer> searchCustomerByName(String name) {
        List<CustomerEntity> byName = repository.findByName(name);
        List<Customer> customerList = new ArrayList<>();

        byName.forEach(customerEntity -> customerList.add(mapper.map(customerEntity, Customer.class)));
        return customerList;
    }

    @Override
    public List<Customer> searchCustomerByAddress(String address) {
        List<CustomerEntity> byAddress = repository.findByAddress(address);
        ArrayList<Customer> customerList = new ArrayList<>();

        byAddress.forEach(customerEntity -> customerList.add(mapper.map(customerEntity, Customer.class)));
        return customerList;
    }

    @Override
    public List<Customer> searchCustomerBySalary(Double salary) {
        List<CustomerEntity> customerEntities = repository.searchBySalary(salary);
        List<Customer> customerList = new ArrayList<>();
        customerEntities.forEach(customerEntity -> customerList.add(mapper.map(customerEntity, Customer.class)) );
        return customerList;
    }


}
