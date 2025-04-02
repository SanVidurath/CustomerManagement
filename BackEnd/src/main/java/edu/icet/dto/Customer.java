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
    @NotBlank(message = "name is mandatory")
    @Size(min = 2, max = 30, message = "name has to contain at least 2 characters")
    private String name;

    @NotBlank(message = "address is mandatory")
    private String address;

    @NotNull(message = "salary cannot be empty")
    @Min(1)
    private Double salary;
}
