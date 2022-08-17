"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailSubscriber {
    constructor(email, user) {
        this.userEmail = '';
        this.userEmail = email;
        this.user = user;
    }
    execute() {
        // send email
        console.log('sending email');
    }
}
exports.default = EmailSubscriber;
