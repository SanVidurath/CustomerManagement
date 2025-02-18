package edu.icet.repository.custom;

import edu.icet.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CustomerRepository extends JpaRepository<CustomerEntity,Integer> {
    List<CustomerEntity> findByName(String name);
    List<CustomerEntity> findByAddress(String address);
    List<CustomerEntity> searchBySalary(Double salary);
    //if name is not present as an attribute then simpleJpaRepository won't let to run this

}
