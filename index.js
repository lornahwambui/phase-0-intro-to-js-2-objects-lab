// Write your solution in this file!
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee; 
  }
  console.log("Initial Employee:", employee);
  
  employee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log("After updateEmployeeWithKeyAndValue:", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("After destructivelyUpdateEmployeeWithKeyAndValue:", employee);
  
  const newEmployeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("After deleteFromEmployeeByKey (without mutating original):", newEmployeeWithoutName);
  console.log("Original Employee (not mutated):", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("After destructivelyDeleteFromEmployeeByKey:", employee);
