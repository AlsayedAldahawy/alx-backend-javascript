interface Student {
    firstName : String,
    lastName : String,
    age : Number,
    location : String,
}

const student1 : Student = {
    firstName : "Alsayed",
    lastName : "Aldahawy",
    age : 28,
    location : "Alexandria",
}

const student2 : Student = {
    firstName : "Amira",
    lastName : "Khaled",
    age : 26,
    location : "Cairo",
}

const studentsList : Student[] = [student1, student2];

// creating the table
const myTable = document.createElement('table');
myTable.style.border = "1px solid black";

// making the table header
const tableHeader = document.createElement('th');
tableHeader.style.border ="1px solid black";
const tableHeader2 = document.createElement('th');
tableHeader2.style.border ="1px solid black";

tableHeader.innerText = 'First Name';
tableHeader2.innerText = 'Location';


myTable.appendChild(tableHeader);
myTable.appendChild(tableHeader2);

// adding students data

studentsList.forEach(student => {
    const tableRow = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');

    firstName.innerText = `${student.firstName}`;
    location.innerText = `${student.location}`;

    tableRow.appendChild(firstName);
    tableRow.appendChild(location);

    myTable.appendChild(tableRow);
})

document.body.appendChild(myTable);
