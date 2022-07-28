"use strict";
// import AbstractFactory from './abstractFactory/AbstractFactory';
// import SedanFactory from './abstractFactory/SedanFactory';
// import SuvFactory from './abstractFactory/SuvFactory';
exports.__esModule = true;
var main_1 = require("./chainOfResponsibility/main");
// import Factory from './factory/Factory';
// import Admin from './proxy/auth/Admin';
// import User from './proxy/auth/User';
// import ProxyDesignPattern from './proxy/Proxy';
// import { Singleton } from './singleton/Singleton';
// // /**
// //  * SINGLETON DESIGN PATTERN
// //  */
// // const setting = Singleton.getInstance();
// // console.log(setting);
// // /**
// //  * FACTORY DESIGN PATTERN
// //  */
// // const factoryBuiding = new Factory();
// // const softhouse = factoryBuiding.getHouse('soft house', 'V-BUILDING');
// // console.log(softhouse);
// // const hardhouse = factoryBuiding.getHouse('hard house', 'Z-BUILDING');
// // console.log(hardhouse);
// // /**
// //  * ABSTRACT FACTORY DESIGN PATTERN
// //  */
// // const abstractFactory = new AbstractFactory();
// // const sedanFactory = new SedanFactory();
// // const suvFactory = new SuvFactory();
// // const sedanCar = abstractFactory.getVehicle(sedanFactory);
// // const suvCar = abstractFactory.getVehicle(suvFactory);
// // console.log(sedanCar, suvCar);
// // /**
// //  * PROXY DESIGN PATTERN FOR ACCESS CONTROLL USING OBJECT
// //  */
// // const user = new Admin();
// // const runCommand = new ProxyDesignPattern(user);
// // runCommand.run();
// /**
//  * CHAIN OF RESPONSIBILITY DESIGN PATTERN
//  */
var auth = new main_1["default"]();
var isAuthenticated = auth.authServicehandler().handler('austine', '321');
console.log(isAuthenticated);
