"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhoneSubscriber {
    constructor(phoneNumber, user) {
        this.userPhoneNumber = '';
        this.userPhoneNumber = phoneNumber;
        this.user = user;
    }
    execute() {
        console.log('sending message to user phone number');
    }
}
exports.default = PhoneSubscriber;
