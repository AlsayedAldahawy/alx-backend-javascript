import HolbertonCourse from './2-hbtn_course';

const course = new HolbertonCourse('PHP', 20, ['Lucie', 'Guillaume']);
course.name = 'PHP2';
course.length = 10;
course.students = ['Thomas'];

console.log(course);

// const c1 = new HolbertonCourse(10, 20, ['Lucie', 'Guillaume']);
// const c2 = new HolbertonCourse('PHP', '20', ['Lucie', 'Guillaume']);
const c3 = new HolbertonCourse('PHP', 20, 'Lucie');
