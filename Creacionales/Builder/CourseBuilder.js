"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseBuilder = void 0;
const Course_1 = require("./Course");
class CourseBuilder {
    constructor() {
        this.name = '';
        this.description = '';
        this.materials = [];
        this.instructorDetails = { name: '', email: '', experience: 0 };
        this.schedule = null;
        this.students = null;
        this.startDate = null;
        this.endDate = null;
        this.customMethod = (behavior) => { };
    }
    setCustomMethod(method) {
        this.customMethod = method;
        return this;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setMaterials(materials) {
        this.materials = materials;
        return this;
    }
    setInstructor(instructor) {
        this.instructorDetails = instructor;
        return this;
    }
    // public setSchudule( schedule : ISchedule ) : CourseBuilder{
    //     this.schedule = schedule
    //     return this
    // }
    setStudents(students) {
        this.students = students;
        return this;
    }
    setStartDate(date) {
        this.startDate = date;
        return this;
    }
    setEndDate(date) {
        this.endDate = date;
        return this;
    }
    buildCourse() {
        const course = new Course_1.Course(this.name, this.description, this.materials, this.instructorDetails, this.schedule, this.students, this.startDate, this.endDate);
        course.addExtraBehavior = this.customMethod;
        return course;
    }
    modifyInstructor(newInstructor) {
        this.instructorDetails = newInstructor;
        return this;
    }
    addStudent(student) {
        var _a;
        (_a = this.students) === null || _a === void 0 ? void 0 : _a.push(student);
        return this;
    }
    addMaterial(material) {
        this.materials.push(material);
        return this;
    }
}
exports.CourseBuilder = CourseBuilder;
