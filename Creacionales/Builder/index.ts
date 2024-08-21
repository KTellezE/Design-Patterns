
import { Course } from './Course';

// Creación de un curso con múltiples parámetros, algunos nulos o vacíos
const basicCourse = new Course(
    'Introducción a TypeScript',
    '', // Descripción nula
    [], // Materiales nulos
    { name: 'Alice', email: 'alice@example.com', experience: 5 }, // Detalles del instructor
    null, // Horario por defecto
    null, // Lista de estudiantes vacía
    null, // Fecha de inicio por defecto
    null  // Fecha de fin por defecto
);

console.log('Curso 1:');
basicCourse.displayCourseInfo();
console.log('*****************************************');

// Creación de un curso completo con todos los detalles
const advancedCourse = new Course(
    'TypeScript Avanzado',
    'Un curso avanzado sobre TypeScript',
    ['Libro', 'Videos', 'Proyectos'],
    { name: 'Bob', email: 'bob@example.com', experience: 10 },
    { days: ['Lunes', 'Miércoles'], time: '10:00 - 12:00' },
    [
        { name: 'Kevin', email: 'Kevin@example.com' },
        { name: 'Victor', email: 'Victor@example.com' },
        { name: 'Camila', email: 'Camila@example.com' },
        { name: 'Jose', email: 'Jose@example.com' },
        { name: 'Amairani', email: 'Amairani@example.com' },
    ],
    new Date(2024, 8, 1),
    new Date(2024, 11, 30)
);

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');