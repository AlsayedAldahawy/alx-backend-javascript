// task 1: interface for Teacher
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any; // Index signature to allow additional properties

}

// task 2: interface Directors
interface Directors extends Teacher {
    numberOfReports: number;
}

// task 3: interface for function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// task 3: function printTeacher returns a formatted name
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName[0]}.${lastName}`
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log("Director", director1);
console.log("Teacher", teacher3);
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
