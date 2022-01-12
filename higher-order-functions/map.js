const students = [
    { 
        _id: 1,
        first_name: "Tom",
        last_name: "Smith",
        age: 8,
        math_grades: [80, 100, 70, 95, 99]

    },
    { 
        _id: 2,
        first_name: "Eric",
        last_name: "Robinson",
        age: 9,
        math_grades: [70, 90, 90, 80, 72]
    },
    { 

        first_name: "James",
        last_name: "Cruz",
        age: 8,
        math_grades: [85, 100, 100, 90, 90]
    }
]

//GOAL: understand the higher Order function .map
//map funciton is going to create a new array.  It calls a function for every element in the original array.
//if the orginal array is empty, it does not execute it.
//It does not mutate (change) the orginal array
//It always returns a value, if nother is specified, it return undefined

//Task 1: Get a list of ids from the students




//Task 2: Return the average math grade for each student.
//NOTE: use reduce to get the toral. sum = arr.reduce((a, b) => a + b, 0);


