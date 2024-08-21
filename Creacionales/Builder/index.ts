
import { CourseBuilder } from './CourseBuilder';

const basicCourse = new CourseBuilder()
    .setName('Introducción a TypeScript')
    .setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
    .buildCourse();//esta linea nos devuelve un objeto tipo course, si la quito, regresa un builder

console.log('Curso 1:');
basicCourse.displayCourseInfo();
console.log('*****************************************');

const advancedCourse = new CourseBuilder()
    .setName('TypeScript Avanzado')
    .setDescription('Un curso avanzado sobre TypeScript')
    .setInstructor({ name: 'Bob', email: 'bob@example.com', experience: 10 })
    .setStartDate(new Date(2024, 8, 1))
    .setEndDate(new Date(2024, 11, 30))
    .setStudents([
        { name: 'Kevin', email: 'Kevin@example.com' },
        { name: 'Victor', email: 'Victor@example.com' },
        { name: 'Camila', email: 'Camila@example.com' },
        { name: 'Jose', email: 'Jose@example.com' },
        { name: 'Amairani', email: 'Amairani@example.com' },
    ])
    .addStudent({ name: 'Victor', email: 'Victor@example.com' })
    .addMaterial("automovil")
    .setCustomMethod( (message : string) => {
        console.log("Se agrego funcionalidad extra " + message)
    } )
    .buildCourse();

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');
advancedCourse.addExtraBehavior("Aqui mero se agrero")