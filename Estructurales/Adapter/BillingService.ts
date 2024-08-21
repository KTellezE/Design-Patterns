import { ExternalNotificationService } from './ExternalNotificationService';
import { NotificationManager } from './NotificationManager';

export class BillingService {
    private notificationManager: NotificationManager;
    private externalService : ExternalNotificationService

    constructor() {
        this.notificationManager = NotificationManager.getSingleInstance();
        this.externalService = new ExternalNotificationService()
    }

    public notifyPaymentDue(studentEmail: string): void {
        // Lógica para verificar el estado de pago...
        console.log(`Notificación de pago enviada a: ${studentEmail}`);

        // Notificación de vencimiento de pago
        this.notificationManager.notifyByEmail('Tu pago de colegiatura está próximo a vencer', studentEmail);
        this.externalService.notifyExternalTelegram("5527652890","URGENTE: Pasa a las oficinas para pagar tu colegiatura")
    }
}


