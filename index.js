// Write your solution in this file!

const employee = {
    name: "Sandra",
    streetAddress: "123 CandyCane Lane"
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {

    const newEmployeeObj = {...employeeObj };

    newEmployeeObj[key] = value;

    return newEmployeeObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {

    employeeObj[key] = value;

    return employeeObj;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployeeObj = {...employee };

    delete newEmployeeObj[key];

    return newEmployeeObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
}