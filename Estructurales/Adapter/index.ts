
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';

const incriptionService = new EnrollmentService()
const billingService = new BillingService()
const contactMail = "Kevin.Tellez@axity.com"

incriptionService.enrollStudent(contactMail)
billingService.notifyPaymentDue(contactMail)