let data = [
	{
		id: 1,
		name: 'Andra',
		hobbies: [
			{
				id: 1,
				name: 'memancing',
			},
		],
		age: 30,
		address: 'Jalan Malang ',
		city: 'Malang ',
		phone: '555-1234',
	},
	{
		id: 2,
		name: 'Andri ',
		age: 25,
		address: 'Jalan Kediri',
		city: 'Kediri ',
		phone: '555-5678',
	},
	{
		id: 3,
		name: 'Andro ',
		age: 40,
		address: 'Jalan Blitar',
		city: 'Jalan',
		phone: '555-8765',
	},
	{
		id: 4,
		name: 'Andre ',
		age: 35,
		address: 'Jalan Pare',
		city: 'Pare ',
		phone: '555-4321',
	},
];

//TODO 1 : dapatkan semua data
let allData = data;
console.log(allData);


//TODO 2 : dapatkan data dengan nama tertentu
let andraData = data.find(person => person.name === 'Andra');
console.log(andraData);


//TODO 3 : dapatkan data dengan alamat New York
let kediriData = data.find(person => person.address.includes('Kediri'));
console.log(kediriData);



//TODO 4 : dapatkan data dengan umur = 30
let age30Data = data.find(person => person.age === 30);
console.log(age30Data);


//---------------------------------
//TODO 5 : dapatkan data dengan umur >= 30 dan alamat Jalan
let filteredData = data.filter(person => person.age >= 30 && person.address.includes('Jalan'));
console.log(filteredData);


//TODO 6 : dapatkan data dengan id 2
let id2Data = data.find(person => person.id === 2);
console.log(id2Data);

