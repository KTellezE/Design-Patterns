import { CoursePresentation } from "./CoursePresentation";
import { Course } from "./Course";

export class PresentacionOnline extends CoursePresentation{
    private platform : string;

    constructor(platform : string , course : Course){
        super(course)
        this.platform = platform
    }

    public presentarCurso() : void {
        console.log(`Este curso sera impartido por la plataforma ${this.platform}`)
        this.course.displayCourseInfo()
    }

    public showOnlineResults() : void{
        console.log(`Los materiales del curso son`)
        this.course.getMaterials.forEach(material => {console.log(material)})
    }

    public sendReminder(cadena:string) : void{
        console.log(`Este es un recordatorio de tu curso ${cadena}`)
    }

}

