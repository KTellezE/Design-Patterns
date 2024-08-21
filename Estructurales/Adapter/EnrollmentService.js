"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentService = void 0;
const NotificationManager_1 = require("./NotificationManager");
class EnrollmentService {
    constructor() {
        this.notificationManager = NotificationManager_1.NotificationManager.getSingleInstance();
    }
    enrollStudent(studentEmail) {
        // Lógica para inscribir al estudiante...
        console.log(`Estudiante inscrito: ${studentEmail}`);
        // Notificación de inscripción exitosa
        this.notificationManager.notifyByEmail('Tu inscripción al curso Patrones de Diseño fue exitosa', studentEmail);
        this.notificationManager.notifyBySMS('Tu inscripción al curso Patrones de Diseño fue exitosa', studentEmail);
        this.notificationManager.ownNotificationTelegram('Tu incripcion al curso Patrones de Diseño fue exitosa', '5613098767');
    }
}
exports.EnrollmentService = EnrollmentService;
