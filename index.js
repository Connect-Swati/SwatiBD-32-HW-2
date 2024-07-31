let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
let phones = [
  { number: "123-456-7890", owner: "Alice", type: "mobile" },
  { number: "987-654-3210", owner: "Bob", type: "home" },
];

let accounts = [
  { number: "111122223333", holder: "Charlie", balance: 5000 },
  { number: "444455556666", holder: "Dave", balance: 3000 },
];

let licenses = [
  { number: "D1234567", name: "Eve", expiryDate: "2026-04-01" },
  { number: "D7654321", name: "Frank", expiryDate: "2024-11-15" },
];

let employees = [
  { id: "E1234", name: "Grace", department: "Engineering" },
  { id: "E5678", name: "Hank", department: "Marketing" },
];

let orders = [
  { id: "ORD12345", customerName: "Ivy", totalAmount: 150 },
  { id: "ORD67890", customerName: "Jake", totalAmount: 200 },
];

/*
Exercise 1: Find Mobile Phone Number

Create an endpoint /phones/find that accepts a phoneNumber from the query parameters.

Define the variable name for the phone number as phoneNumber.

Write a function findPhoneNumber to find the phone number in an array of phone objects.

Respond with the found phone details.

API Call:

<http://localhost:3000/phones/find?phoneNumber=123-456-7890>


Expected Output:

{
  phone: {
    number: '123-456-7890',
    owner: 'Alice',
    type: 'mobile'
  }
}

*/
function findPhoneNumber(phoneNumber) {
  let result = phones.find((phone) => phone.number === phoneNumber);
  return result;
}
app.get("/phones/find", (req, res) => {
  let phoneNumber = req.query.phoneNumber;
  let foundPhone = findPhoneNumber(phoneNumber);
  if (!foundPhone) {
    return res.status(404).send("Phone not found");
  }
  res.json({ phone: foundPhone });
});

/*
Exercise 2: Find Bank Account Number

Create an endpoint /accounts/find that accepts an accountNumber from the query parameters.

Define the variable name for the account number as accountNumber.

Write a function findAccountNumber to find the account number in an array of bank account objects.

Respond with the found account details.

API Call:

<http://localhost:3000/accounts/find?accountNumber=111122223333>


Expected Output:

{
  account: {
    number: '111122223333',
    holder: 'Charlie',
    balance: 5000
  }
}

*/
function findAccountNumber(accountNumber) {
  let result = accounts.find((account) => account.number === accountNumber);
  return result;
}
app.get("/accounts/find", (req, res) => {
  let accountNumber = req.query.accountNumber;
  let foundAccount = findAccountNumber(accountNumber);
  if (!foundAccount) {
    return res.status(404).send("Account not found");
  }
  res.json({ account: foundAccount });
});

/*
Exercise 3: Find Driver's License Number

Create an endpoint /licenses/find that accepts a licenseNumber from the query parameters.

Define the variable name for the license number as licenseNumber.

Write a function findLicenseNumber to find the license number in an array of driver's license objects.

Respond with the found license details.

API Call:

<http://localhost:3000/licenses/find?licenseNumber=D1234567>


Expected Output:

{
  license: {
    number: 'D1234567',
    name: 'Eve',
    expiryDate: '2026-04-01'
  }
}
*/
function findLicenseNumber(licenseNumber) {
  let result = licenses.find((license) => license.number === licenseNumber);
  return result;
}
app.get("/licenses/find", (req, res) => {
  let licenseNumber = req.query.licenseNumber;
  let foundLicense = findLicenseNumber(licenseNumber);
  if (!foundLicense) {
    return res.status(404).send("License not found");
  }
  res.json({ license: foundLicense });
});

/*
Exercise 4: Find Employee ID

Create an endpoint /employees/find that accepts an employeeId from the query parameters.

Define the variable name for the employee ID as employeeId.

Write a function findEmployeeById to find the employee ID in an array of employee objects.

Respond with the found employee details.

API Call:

<http://localhost:3000/employees/find?employeeId=E1234>


Expected Output:

{
  employee: {
    id: 'E1234',
    name: 'Grace',
    department: 'Engineering'
  }
}

*/
function findEmployeeById(employeeId) {
  let result = employees.find((employee) => employee.id === employeeId);
  return result;
}
app.get("/employees/find", (req, res) => {
  let employeeId = req.query.employeeId;
  let foundEmployee = findEmployeeById(employeeId);
  if (!foundEmployee) {
    return res.status(404).send("Employee not found");
  }
  res.json({ employee: foundEmployee });
});

/*
Exercise 5: Find Order ID

Create an endpoint /orders/find that accepts an orderId from the query parameters.

Define the variable name for the order ID as orderId.

Write a function findOrderById= to find the order ID in an array of order objects.

Respond with the found order details.

API Call:

<http://localhost:3000/orders/find?orderId=ORD12345>


Expected Output:

{
  order: {
    id: 'ORD12345',
    customerName: 'Ivy',
    totalAmount: 150
  }
}

*/
function findOrderById(orderId) {
  let result = orders.find((order) => order.id === orderId);
  return result;
}
app.get("/orders/find", (req, res) => {
  let orderId = req.query.orderId;
  let foundOrder = findOrderById(orderId);
  if (!foundOrder) {
    return res.status(404).send("Order not found");
  }
  res.json({ order: foundOrder });
});
