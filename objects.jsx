/*
Task
    Create an object named company.
    Add at least two departments to the company, like development and marketing.
    Each department should be an object that contains an array of employees.
    Each employee is an object with properties: name, position, and salary.
    Write functions to:
        Add a new employee to a specific department.
        Retrieve total salary expenditure for a specific department.
        Find an employee by name and return their details.
    Ensure the code handles cases where a department or employee does not exist.
*/

const company = {
    development: {
      employees: [
        { name: "Alice", position: "Developer", salary: 80000 },
        {name: "Thanh", position: "Developer", salary: 95000},
      ],
      // more properties or methods
    },
    marketing: {
      employees: [
        {name: "Cristina", position: "Marketing", salary: 75000},
        {name: "Patsy", position: "Marketing", salary: 85000},
        {name: "Laura", position: "Marketing", salary: 90000}
      ],
    },
  };
  
  // Example functions to implement
  function addEmployee(department, name, position, salary) {
    // code to add a new employee
    //console.log(company.development["employees"][1])
    if(!company[department]) {
      return "Department does not exist"
    }
    company[department].employees.push({name: name,  position:position, salary:salary});
   
  }
  
  function getTotalSalary(department) {
    // code to calculate total salary for a department
    let totalSalary = 0;
    for(let employee of company[department].employees) {
      totalSalary += employee.salary;
    }
    return totalSalary;
  }
  
  function findEmployee(name) {
    // code to find an employee by name
    //console.log(company.development["employees"][1])
    for(let department in company) {
      for(let employee of company[department].employees) {
        if(employee.name === name) {
          return employee;
        } else {
            return "Employee not found";
          }
      }
    }

  }
  