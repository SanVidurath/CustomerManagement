package edu.icet.controller;

import edu.icet.dto.Customer;
import edu.icet.service.custom.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/customer", produces = "application/json")
@RequiredArgsConstructor
@CrossOrigin
public class CustomerController {

    final CustomerService service;

    @PostMapping("/add")
    public ResponseEntity <Map<String, String>> addCustomer(@Valid @RequestBody Customer customer){
        service.add(customer);
        Map<String, String> response = new HashMap<>();
        response.put("message","Customer created successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
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

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex){

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach(error->{
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .header("Content-Type", "application/json")
                .body(errors);
    }
}
