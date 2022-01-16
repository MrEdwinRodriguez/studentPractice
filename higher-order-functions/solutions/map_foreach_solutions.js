const students = [
    { 
        _id: 1,
        first_name: "Tom",
        last_name: "Smith",
        age: 8,
        grade: 40,

    },
    { 
        _id: 2,
        first_name: "Eric",
        last_name: "Robinson",
        age: 9,
        grade: 70,
    },
    { 
        _id: 3,
        first_name: "James",
        last_name: "Cruz",
        age: 8,
        grade: 80,
    }
]

//GOAL: understand the higher Order function .map
//map funciton is going to create a new array.  It calls a function for every element in the original array.
//It does not mutate (change) the orginal array
//It always returns a value, if nothing is specified, it returns undefined

//Example 1: Get a list of ids from the students
//Example of three different ways to write the map method. 
//Cleanest version
const studentIds = students.map(student => student._id)

//es6 long version
const studentIdsES6Long = students.map((student) => {
    return student._id
});

//es5 version
const studentIdsES5 = students.map(function (student) {
    return student._id
});

console.log('All three version will be the same')
console.log('You can choose any of the three, but recommend sticking with one of the es6 versions.')
console.log(studentIds)
console.log(studentIdsES6Long)
console.log(studentIdsES5)

//Example 2: For the students array, if the student has a grade of 60 or above, add the attribute passed = true to the object.
//If the grade is less than 60, add attribite passed = false to the object.

students.forEach(student => {
    if (student.grade >= 60) {
        student.passed = true;
    } else {
        student.passed = false;
    };
});
console.log(students)



//Task 1:  The teacher needs the class roster. Create an array of the students first and last name. 
const studentRoster = students.map((student) => {
    //returning a template literal
    //if you are not familiar with this you can return student.fist_name + " " + student.last_name 
    return `${student.first_name} ${student.last_name}`;
});
console.log(studentRoster)


//Task 2:  The teacher has decided to add a curve to the grades.  Add 10 points to every student's grade.   
students.forEach(student => student.grade = student.grade + 10);
console.log(students)








