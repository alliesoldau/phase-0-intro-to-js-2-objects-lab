// Write your solution in this file!
const employee = {
    name: "Allie",
    streetAddress: "85 Forest Ave"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...employee};
    
    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}