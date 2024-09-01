interface Teacher {
    readonly firstName : string,
    readonly lastName : string,
    fullTimeEmployee : boolean,
    yearsOfExperience? : number,
    location: string,
    [key: string]: any; // Index signature to allow additional properties
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
