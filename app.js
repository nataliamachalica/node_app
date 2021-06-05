const fs = require('fs');

const genders = [ 'male', 'female' ];
const maleNames = [ 'Leonard','James', 'Kirk', 'Ralph', 'Frank', 'David', 'Alex', 'Kriss', 'James', 'Harry' ];
const femaleNames = [ 'Viola', 'Nena', 'Emily', 'Kim', 'Olivia', 'Sarah', 'Mary', 'Jane', 'Laura', 'Karen' ];
const lastNames = [ 'Smith', 'Brown', 'Davis', 'Miller', 'Jones', 'Parker', 'Williams', 'Griffin', 'Lopez', 'Wilson' ];
const ages = [ 19, 22, 24, 27, 28, 34, 14, 16 ];

const randChoice = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)]
};

const people = [];

for(let i = 0; i < 20; i++) {
	let person = {};

	person.gender = randChoice(genders);

	if(person.gender === 'female') {
		person.name = randChoice(femaleNames);
	} else {
		person.name = randChoice(maleNames);
	}

	person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

	person.age = randChoice(ages);

	people.push(person);

};

const dataArr = JSON.stringify(people);

fs.writeFile('people.json', dataArr, (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});