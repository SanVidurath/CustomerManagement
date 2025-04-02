package edu.icet.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Customer {
    private Integer id;

    @Valid

    @Size(min = 2, max = 30, message = "name has to contain at least 2 characters")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "name can only contain letters and spaces")
    private String name;

    @NotBlank(message = "address is mandatory")
    @Pattern(regexp = "^[a-zA-Z0-9\\s/,]+$", message = "address is not valid")
    private String address;

    @NotNull(message = "salary is mandatory and has to be all digits")
    @DecimalMin(value = "1", message = "salary must be greater than zero")
    private Double salary;
}
