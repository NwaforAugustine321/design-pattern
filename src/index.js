"use strict";
// import AbstractFactory from './abstractFactory/AbstractFactory';
// import SedanFactory from './abstractFactory/SedanFactory';
// import SuvFactory from './abstractFactory/SuvFactory';
exports.__esModule = true;
var manager_1 = require("./memento/manager");
// import Main from './chainOfResponsibility/main';
// import Context from './statePattern/context';
// import LightOff from './statePattern/lightOff';
// import LightOn from './statePattern/lightOn';
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
// const auth = new Main();
// const isAuthenticated = auth.authServicehandler().handler('austine', '321');
// console.log(isAuthenticated);
// const ctx = new Context();
// const lightOn = new LightOn();
// const lightOf = new LightOff();
// lightOn.handleLightState(ctx);
// console.log(ctx.getState());
// lightOf.handleLightState(ctx);
// console.log(ctx.getState());
var action = new manager_1["default"]();
action.saveState('hello world 1');
action.saveState('hello world 2');
//action.saveState('hello world 3');
var prev = action.getState();
console.log(prev);
