
import { CourseBuilder } from "./CourseBuilder";
import { PresentacionOnline } from "./PresentacionOnline";
import { PresentacionOnsite } from "./PresentacionOnsite";

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

const cursoAvanzadoBD = new CourseBuilder()
    .fromPrototype(advancedCourse.clone())
    .setName("Curso especializado de BD")
    .setInstructor( { name: 'Alice', email: 'alice@example.com', experience: 5 } )
    .setSchudule( { days : ["Lunes"] , time : 'de 8 AM a 10 AM' }  )
    .setMaterials(['Cuenta en Azure','Caso de estudio','Instalador SQL server'])
    .buildCourse()

console.log('Curso 3: clon');
console.log('*****************************************');

const presentacionOnline = new PresentacionOnline('Teams',cursoAvanzadoBD)
presentacionOnline.presentarCurso()
presentacionOnline.sendReminder(`el día ${cursoAvanzadoBD.getStartDate}`)

console.log('*****************************************');

const presentacionOnsite = new PresentacionOnsite('Interlomas',advancedCourse)
presentacionOnsite.presentarCurso()
presentacionOnsite.rsvp(false)
presentacionOnline.sendReminder(`el día ${advancedCourse.getStartDate}`)
