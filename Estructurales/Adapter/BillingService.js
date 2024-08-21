"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const ExternalNotificationService_1 = require("./ExternalNotificationService");
const NotificationManager_1 = require("./NotificationManager");
class BillingService {
    constructor() {
        this.notificationManager = NotificationManager_1.NotificationManager.getSingleInstance();
        this.externalService = new ExternalNotificationService_1.ExternalNotificationService();
    }
    notifyPaymentDue(studentEmail) {
        // Lógica para verificar el estado de pago...
        console.log(`Notificación de pago enviada a: ${studentEmail}`);
        // Notificación de vencimiento de pago
        this.notificationManager.notifyByEmail('Tu pago de colegiatura está próximo a vencer', studentEmail);
        this.externalService.notifyExternalTelegram("5527652890", "URGENTE: Pasa a las oficinas para pagar tu colegiatura");
    }
}
exports.BillingService = BillingService;
