
import { ExternalNotificationService } from "./ExternalNotificationService";
import { INotificationService } from "./INotificationService";

export class NotificationAdapter implements INotificationService
{
    private externalNotification : ExternalNotificationService

    constructor(){
        this.externalNotification = new ExternalNotificationService()
    }
    
    sendNotification(message: string, recipient: string): void {
        this.externalNotification.notifyExternalTelegram(recipient,message)
    }
}