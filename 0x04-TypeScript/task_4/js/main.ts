/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/React.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const cTeacher : Subjects.Teacher = {
    firstName : "Alsayed",
    lastName : "Aldahawy",
    experienceTeachingC : 10,
};


console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log(cpp, java, react);

console.log(cpp.getAvailableTeacher());
console
