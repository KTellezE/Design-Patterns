"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAdapter = void 0;
const ExternalNotificationService_1 = require("./ExternalNotificationService");
class NotificationAdapter {
    constructor() {
        this.externalNotification = new ExternalNotificationService_1.ExternalNotificationService();
    }
    sendNotification(message, recipient) {
        this.externalNotification.notifyExternalTelegram(recipient, message);
    }
}
exports.NotificationAdapter = NotificationAdapter;
