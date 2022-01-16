const used_cars = [
    {
        make: "Honda",
        model: "Accord",
        year: 2015,
        previous_owners: [
            "John Thomas", "Jacob Jones"
        ],
        mileage: 78000
    },
    {
        make: "Nissan",
        model: "Sentra",
        year: 2018,
        previous_owners: [
            "Joe Clark"
        ],
        mileage: 47000
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2016,
        previous_owners: [
            "Michelle Smith", "Elie Mae", "Matthew Mckenzie"
        ],
        mileage: 68000
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2015,
        previous_owners: [
            "Brady Lewis"
        ],
        mileage: 68000
    },
];

//example 1: create an array of cars with less thans 70000 miles.
const lessThan = used_cars.filter(used_car => used_car.mileage < 70000 );
console.log('Less than 70,000 miles', lessThan);



//example 2:  Return the first Honda you find
const firstHonda = used_cars.find(used_car => used_car.make === "Honda")
console.log('First Honda:', firstHonda);


//Task 1: Your manager wants to display the first  Honda Accord from 2015 you find.
const firstAccord2015 = used_cars.find(used_car => used_car.make === "Honda" && used_car.model === "Accord" && used_car.year === 2015)
console.log('First 2015 Honda Accord', firstAccord2015);


//Task 2: A customer would like to see a list of all cars with only one owener.
const carsWithOneOwner = used_cars.filter(used_car => {
    return used_car.previous_owners.length === 1;
});

console.log('Cars with one owner', carsWithOneOwner);
