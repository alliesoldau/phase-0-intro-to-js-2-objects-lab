// Write your solution in this file!
const employee = {
    name: 'Freddie',
    streetAddress: 'Tank St.'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}; // use spread operator to create a copy
    newObj[key] = value; // update the value for the key
    return newObj; // return the new variable
    // note: the original object {employee} is left unchanged
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; // note: we have to use [] here bc key is a dynamic variable
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj}; // spread operator to create a copy
    delete newObj[key]; // delete operator to remove the key
    return newObj; // return the new object
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]; // delete operator to remove the key
    return obj; // return the same object that has now been modified
}