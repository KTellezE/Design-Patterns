
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
    .setDescription('Template para cursos avanzados')
    .setSchudule( { days : ["Lunes"] , time : 'de 8 AM a 5 PM' } )
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
    .setMaterials(["automovil","Diapos","Libros","Laptop"])
    .setCustomMethod( (message : string) => {
        console.log("Se agrego funcionalidad extra " + message)
    } )
    .buildCourse();

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');
advancedCourse.addExtraBehavior("Aqui mero se agrero")

const cursoAvanzadoBD = new CourseBuilder()
    .fromPrototype(advancedCourse.clone())
    .setName("Curso especializado de BD")
    .setInstructor( { name: 'Alice', email: 'alice@example.com', experience: 5 } )
    .setSchudule( { days : ["Lunes"] , time : 'de 8 AM a 10 AM' }  )
    .buildCourse()

console.log('Curso 3: clon');
cursoAvanzadoBD.displayCourseInfo()
console.log('*****************************************');

const cursoAvanzadoAPIs = new CourseBuilder()
    .fromPrototype(advancedCourse.clone())
    .setName("Curso especializado de Apis")
    .setInstructor( { name: 'Gerard', email: 'gerard@example.com', experience: 50 } )
    .setSchudule( { days : ["Lunes"] , time : 'de 10 AM a 12 AM' }  )
    .buildCourse()

console.log('Curso 4: clon');
cursoAvanzadoAPIs.displayCourseInfo()
console.log('*****************************************');