"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observer {
    constructor() {
        this.list = {
            message: [],
            email: [],
        };
    }
    register(type, event) {
        this.list[type].push(event);
    }
    deregister(type, user) {
        this.list[type] = this.list[type].filter((sub) => {
            return sub.user === user ? false : true;
        });
    }
    notify() {
        Object.values(this.list).forEach((listSub) => {
            listSub.forEach((sub) => {
                sub.execute();
            });
        });
    }
}
exports.default = Observer;
