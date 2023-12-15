/* filename: complexCode.js
   content: Code for creating a complex and sophisticated employee management system */

// Employee class represents an employee with basic details and salary
class Employee {
  constructor(name, age, address, salary) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.salary = salary;
  }

  // Increase employee's salary by a certain percentage
  increaseSalary(percentage) {
    this.salary += (this.salary * percentage) / 100;
  }
}

// Manager class inherits from Employee and adds additional functionality
class Manager extends Employee {
  constructor(name, age, address, salary, department) {
    super(name, age, address, salary);
    this.department = department;
    this.subordinates = [];
  }

  // Add a subordinate employee to this manager
  addSubordinate(employee) {
    this.subordinates.push(employee);
  }

  // Calculate total salary of this manager and all subordinates recursively
  calculateTotalSalary() {
    let totalSalary = this.salary;
    for (let subordinate of this.subordinates) {
      totalSalary += subordinate.calculateTotalSalary();
    }
    return totalSalary;
  }
}

// Create employee objects
const employee1 = new Employee("John Doe", 30, "123 Main St", 5000);
const employee2 = new Employee("Jane Smith", 25, "456 Elm St", 4000);
const employee3 = new Employee("Mark Johnson", 35, "789 Oak St", 6000);

// Create manager objects and add employees as subordinates
const manager1 = new Manager("Mike Adams", 40, "789 Pine St", 8000, "Sales");
manager1.addSubordinate(employee1);
manager1.addSubordinate(employee2);

const manager2 = new Manager("Sarah Williams", 45, "234 Maple St", 10000, "Marketing");
manager2.addSubordinate(employee3);
manager2.addSubordinate(manager1); // Manager can also have another manager as a subordinate

// Increase salary of manager2 and all subordinates by 10%
manager2.increaseSalary(10);

// Output total salary of manager2 and all subordinates
console.log(`Total Salary: $${manager2.calculateTotalSalary()}`);

// Output details of all employees and subordinates
console.log("Employee Details:");
console.log(employee1);
console.log(employee2);
console.log(employee3);

console.log("Manager Details:");
console.log(manager1);
console.log(manager2);

// ... (more code here)
// ... (complex functionality related to employee management system)