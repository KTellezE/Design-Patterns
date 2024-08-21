"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnrollmentService_1 = require("./EnrollmentService");
const BillingService_1 = require("./BillingService");
const incriptionService = new EnrollmentService_1.EnrollmentService();
const billingService = new BillingService_1.BillingService();
const contactMail = "Kevin.Tellez@axity.com";
incriptionService.enrollStudent(contactMail);
billingService.notifyPaymentDue(contactMail);
