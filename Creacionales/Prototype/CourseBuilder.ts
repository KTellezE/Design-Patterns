import { Course } from "./Course";
import { IInstructorDetails } from "./IInstructorDetails";
import { IStudent } from "./IStudent";
import { ISchedule } from "./ISchedule";

export class CourseBuilder{
    private name: string = '';
    private description: string = '';
    private materials: string[] = [];
    private instructorDetails: IInstructorDetails = { name: '', email: '', experience: 0 };
    private schedule: ISchedule | null = null;
    private students: IStudent[] | null = null;
    private startDate: Date | null = null;
    private endDate: Date | null = null;

    private customMethod : (behavior : string) => void = (behavior : string) => {}

    public setCustomMethod(method : (behavior : string) => void) : CourseBuilder{
        this.customMethod = method
        return this
    }

    public setName( name : string ) : CourseBuilder{
        this.name = name
        return this
    }

    public setDescription(description: string): CourseBuilder {
        this.description = description;
        return this;
    }
 
    public setMaterials(materials: string[]): CourseBuilder {
        this.materials = materials;
        return this;
    }

    public setInstructor(instructor: IInstructorDetails): CourseBuilder {
        this.instructorDetails = instructor;
        return this;
    }

    public setSchudule( schedule : ISchedule ) : CourseBuilder{
        this.schedule = schedule
        return this
    }

    public setStudents( students : IStudent[] ) : CourseBuilder{
        this.students = students
        return this
    }

    public setStartDate (date : Date) : CourseBuilder {
        this.startDate = date
        return this
    }

    public setEndDate (date : Date) : CourseBuilder{
        this.endDate = date
        return this
    }

    public buildCourse() : Course{
        const course = new Course(
            this.name,
            this.description,
            this.materials,
            this.instructorDetails,
            this.schedule,
            this.students,
            this.startDate,
            this.endDate
        );
        course.addExtraBehavior = this.customMethod;
        return course;
    }

    public modifyInstructor(newInstructor : IInstructorDetails){
        this.instructorDetails = newInstructor
        return this
    }

    public addStudent(student: IStudent): CourseBuilder {
        this.students?.push(student);
        return this;
    }

    public addMaterial(material : string): CourseBuilder {
        this.materials.push(material);
        return this;
    }

    public fromPrototype(course:Course) : CourseBuilder{
        this.name = course.getName
        this.description = course.getDescription
        this.materials = [ ...course.getMaterials ]
        this.instructorDetails = { ...course.getInstructorDetails }
        this.students = course.getStudents ? course.getStudents.map(student => ({ ...student })) : null
        this.schedule = course.getSchedule ? {...course.getSchedule} : null
        this.startDate = course.getStartDate ?  new Date(course.getStartDate.getTime()) : null
        this.endDate = course.getEndDate ?  new Date(course.getEndDate.getTime()) : null
        this.customMethod = course.addExtraBehavior
        return this
    }

}