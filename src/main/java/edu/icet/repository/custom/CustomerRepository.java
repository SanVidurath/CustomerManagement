package edu.icet.repository.custom;

import edu.icet.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<CustomerEntity,Integer> {
    CustomerEntity findByName(String name);
    //if name is not present as an attribute then simpleJpaRepository won't let to run this

}
