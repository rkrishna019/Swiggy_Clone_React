let people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Smith", age: 25 },
    { firstName: "Michael", lastName: "Johnson", age: 40 }
];

let namesOfPeopleOver29 = people.reduce((accumulator, currentValue) => {
    if (currentValue.age > 29) {
        accumulator = currentValue.firstName;
    }
    return accumulator;
}, "");

console.log(namesOfPeopleOver29);
