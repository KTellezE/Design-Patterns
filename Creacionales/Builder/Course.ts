
interface InstructorDetails {
    name: string;
    email: string;
    experience: number; // Años de experiencia
}

interface Schedule {
    days: string[]; // Días de la semana, por ejemplo ['Lunes', 'Miércoles']
    time: string;   // Hora, por ejemplo '10:00 - 12:00'
}

interface Student {
    name: string;
    email: string;
}

export class Course {
    public name: string;
    public description: string;
    public materials: string[];
    public instructorDetails: InstructorDetails;
    public schedule: Schedule | null;
    public students: Student[] | null;
    public startDate: Date | null;
    public endDate: Date | null;

    constructor(
        name: string,
        description: string,
        materials: string[],
        instructorDetails: InstructorDetails,
        schedule: Schedule | null,
        students: Student[] | null,
        startDate: Date | null,
        endDate: Date | null
    ) {
        this.name = name;
        this.description = description || 'No description available';
        this.materials = materials || []; // Valor por defecto
        this.instructorDetails = instructorDetails;
        this.schedule = schedule || { days: [], time: '' }; // Valor por defecto
        this.students = students || []; // Lista vacía por defecto
        this.startDate = startDate || new Date(); // Valor por defecto
        this.endDate = endDate || new Date(); // Valor por defecto
    }

    public displayCourseInfo(): void {
        console.log(`Curso: ${this.name}`);
        console.log(`Descripción: ${this.description}`);
        console.log(`Instructor: ${this.instructorDetails.name}, Email: ${this.instructorDetails.email}, Experiencia: ${this.instructorDetails.experience} años`);
        console.log(`Horario: ${this.schedule?.days.join(' , ')} a las ${this.schedule?.time}`);
        console.log(`Fecha de inicio: ${this.startDate?.toDateString()}`);
        console.log(`Fecha de fin: ${this.endDate?.toDateString()}`);
        console.log(`Materiales: ${this.materials.join(', ')}`);
        console.log(`Estudiantes inscritos: ${this.students?.map(s => s.name).join(', ')}`);
    }
}
