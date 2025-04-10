export class Customer {
  id: null|number;
  name: string;
  address: string;
  salary: number;

  constructor(name: string, address: string, salary: number) {
    this.id = null;
    this.name = name;
    this.address = address;
    this.salary = salary;
  }
}
