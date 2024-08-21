import { CoursePresentation } from "./CoursePresentation";
import { Course } from "./Course";

export class PresentacionOnsite extends CoursePresentation{
    private location : string;

    constructor(location : string , course : Course){
        super(course)
        this.location = location
    }

    public presentarCurso() : void {
        console.log(`Este curso sera impartido en la sale ${this.location}`)
        this.course.displayCourseInfo()
    }

    public showRequisite() : void{
        console.log(`Presentarse 15 minutos antes de la cita`)
        console.log('Avisar en recepcion que confirma su cita')
        this.course.getMaterials.forEach(material => {console.log(material)})
    }

    public rsvp(isConfirmmed:boolean) : void{
        if(isConfirmmed){
            console.log('El estudiante confirmo su asistencia')
        }else{
            console.log('El estudiante rechazo su asistencia')
        }
    }

}