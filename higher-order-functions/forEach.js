const students = [
    { 
        _id: 1,
        first_name: "Tom",
        last_name: "Smith",
        age: 8,
        test: 50,
    },
    { 
        _id: 2,
        first_name: "Eric",
        last_name: "Robinson",
        age: 9,
        test: 80,
    },
    { 

        first_name: "James",
        last_name: "Cruz",
        age: 8,
        test: 100
    }
]


//GOAL: understand the higher Order function .forEach
//forEach is an array method that calls a function for every element in the rray.
//if the array is empty, it does not execute it the forEach method.
//It does not mutate (change) the array
//It does not return anything
//Accepts three arguments element, index, array (the array being itterated through)

//Task 1: If the student has a test of 60 or greater, add the attribute passed: true to the students object
//If it is less than 60, add the attribute passed: false to the students object.
// students.forEach(function(student){
//     if(student.test >= 60) {
//         student.passed = true;
//     } else {
//         student.passed = false;
//     }
// });
// students.forEach((student)=> {
//     if(student.test >= 60) {
//         student.passed = true;
//     } else {
//         student.passed = false;
//     }
// });
console.log('students', students)



//Task 2: Use the forEach loop to add each students test score to the variable total Then console.log it.
//total should be the total of all students test scores. 
let total = 0;
//forEach loop to add to the total
students.forEach(student => total += student.test);
console.log('Total: ', total)



