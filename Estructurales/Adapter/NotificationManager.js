"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationManager = void 0;
const EmailNotificationService_1 = require("./EmailNotificationService");
const SMSNotificationService_1 = require("./SMSNotificationService");
const NotificationAdapter_1 = require("./NotificationAdapter");
class NotificationManager {
    constructor() {
        this.emailService = new EmailNotificationService_1.EmailNotificationService();
        this.smsService = new SMSNotificationService_1.SMSNotificationService();
        this.telegramService = new NotificationAdapter_1.NotificationAdapter();
    }
    static getSingleInstance() {
        if (!NotificationManager.instanciaUnica) {
            NotificationManager.instanciaUnica = new NotificationManager();
        }
        return NotificationManager.instanciaUnica;
    }
    notifyByEmail(message, recipient) {
        this.emailService.sendNotification(message, recipient);
    }
    notifyBySMS(message, recipient) {
        this.smsService.sendNotification(message, recipient);
    }
    ownNotificationTelegram(message, recipient) {
        this.telegramService.sendNotification(message, recipient);
    }
}
exports.NotificationManager = NotificationManager;
