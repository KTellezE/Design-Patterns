"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotificationService = void 0;
class SMSNotificationService {
    sendNotification(message, recipient) {
        console.log("Conectando con el proveedor de telefonía");
        console.log(`Enviando SMS a ${recipient}: ${message}`);
    }
}
exports.SMSNotificationService = SMSNotificationService;
