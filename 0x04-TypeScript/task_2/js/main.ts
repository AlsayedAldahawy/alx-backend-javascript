interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getToWork(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome = () => "Working from home";
    getCoffeeBreak = () => "Getting a coffee break";
    workDirectorTasks = () => "the string Getting to director tasks"
}

class Teacher implements TeacherInterface {
    workFromHome = () => "Cannot work from home";
    getToWork = () => "Cannot have a break";
    workTeacherTasks = () => "Getting to work"
}


type employeeType = Teacher | Director;

const createEmployee = (salary: number | string): Director | Teacher => Number(salary) < 500 ? new Teacher() : new Director();
//                               argument type    : return type


// function used as a type predicate and if the employee is a director
export function isDirector(employee: employeeType): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined
    // type assertion
}


function executeWork(employee: employeeType) {
    if (isDirector(employee))
        return employee.workDirectorTasks();
    else
        return employee.workTeacherTasks();
}

console.log(isDirector(createEmployee(500)))

// task 5 test
console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director

// Task 6 test
console.log(executeWork(createEmployee(200)));
// Getting to work
console.log(executeWork(createEmployee(1000)));
// Getting to director tasks


// task 7

type Subjects = "Math" | "History";

function teachClass(todayClass : Subjects) : string {
    return `Teaching ${todayClass}`
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
