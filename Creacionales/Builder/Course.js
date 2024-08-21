"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(name, description, materials, instructorDetails, schedule, students, startDate, endDate) {
        this.name = name;
        this.description = description || 'No description available';
        this.materials = materials || []; // Valor por defecto
        this.instructorDetails = instructorDetails;
        this.schedule = schedule || { days: [], time: '' }; // Valor por defecto
        this.students = students || []; // Lista vacía por defecto
        this.startDate = startDate || new Date(); // Valor por defecto
        this.endDate = endDate || new Date(); // Valor por defecto
    }
    displayCourseInfo() {
        var _a, _b, _c, _d, _e;
        console.log(`Curso: ${this.name}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Instructor: ${this.instructorDetails.name}, Email: ${this.instructorDetails.email}, Experiencia: ${this.instructorDetails.experience} años`);
        console.log(`Horario: ${(_a = this.schedule) === null || _a === void 0 ? void 0 : _a.days.join(' , ')} a las ${(_b = this.schedule) === null || _b === void 0 ? void 0 : _b.time}`);
        console.log(`Fecha de inicio: ${(_c = this.startDate) === null || _c === void 0 ? void 0 : _c.toDateString()}`);
        console.log(`Fecha de fin: ${(_d = this.endDate) === null || _d === void 0 ? void 0 : _d.toDateString()}`);
        console.log(`Materiales: ${this.materials.join(', ')}`);
        console.log(`Estudiantes inscritos: ${(_e = this.students) === null || _e === void 0 ? void 0 : _e.map(s => s.name).join(', ')}`);
    }
}
exports.Course = Course;
