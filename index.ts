// import AbstractFactory from './abstractFactory/AbstractFactory';
// import SedanFactory from './abstractFactory/SedanFactory';
// import SuvFactory from './abstractFactory/SuvFactory';

import Adaptee from './src/adapter/adaptee';
import Adapter from './src/adapter/adapter';
import Printer from './src/adapter/printer';
// import SortA from './src/strategy/sortA';
// import SortB from './src/strategy/sortB';
// import Strategy from './src/strategy/strategy';

// import EmailSubscriber from './observer/emailSubscriber';
// import subscriberEvents from './observer/event';
// import Observer from './observer/observer';
// import PhoneSubscriber from './observer/phoneSubscriber';

// import MementoManager from './memento/manager';

// import Main from './chainOfResponsibility/main';
// import Context from './statePattern/context';
// import LightOff from './statePattern/lightOff';
// import LightOn from './statePattern/lightOn';

// //import Factory from './factory/Factory';
// import Admin from './proxy/auth/Admin';
// import User from './proxy/auth/User';
// import ProxyDesignPattern from './proxy/Proxy';
// //import { Singleton } from './singleton/Singleton';

// // // /**
// // //  * SINGLETON DESIGN PATTERN
// // //  */
// // // const setting = Singleton.getInstance();
// // // console.log(setting);

// // // /**
// // //  * FACTORY DESIGN PATTERN
// // //  */

// //const factoryBuiding = new Factory();

// // const softhouse = factoryBuiding.getHouse('soft house', 'V-BUILDING');
// // console.log(softhouse);

// // const hardhouse = factoryBuiding.getHouse('hard house', 'Z-BUILDING');
// // console.log(hardhouse);

// // // /**
// // //  * ABSTRACT FACTORY DESIGN PATTERN
// // //  */
// const abstractFactory = new AbstractFactory();
// const sedanFactory = new SedanFactory();
// const suvFactory = new SuvFactory();

// const sedanCar = abstractFactory.getVehicle(sedanFactory);
// const suvCar = abstractFactory.getVehicle(suvFactory);

// console.log(sedanCar, suvCar);

// /**
//  * PROXY DESIGN PATTERN FOR ACCESS CONTROLL USING OBJECT
//  */

// const user = new Admin();

// const runCommand = new ProxyDesignPattern(user);

// runCommand.run();

// /**
//  * CHAIN OF RESPONSIBILITY DESIGN PATTERN
//  */

// const auth = new Main();

// const isAuthenticated = auth.authServicehandler().handler('austine', '321');
// console.log(isAuthenticated);

// /**
//  * STATE DESIGN PATTERN
//  */

// const ctx = new Context();

// const lightOn = new LightOn();
// const lightOf = new LightOff();

// lightOn.handleLightState(ctx);
// console.log(ctx.getState());
// lightOf.handleLightState(ctx);
// console.log(ctx.getState());

// /**
//  * OBSERVER DESIGN PATTERN
//  */
// const action = new MementoManager();
// action.saveState('hello world 1');
// action.saveState('hello world 2');
// action.saveState('hello world 3');
// const prev = action.getState();
// console.log(prev);

// const observer = new Observer();

// observer.register(
//   subscriberEvents.EMAIL,
//   new EmailSubscriber('austine@gmail.com', 'austine')
// );

// observer.register(
//   subscriberEvents.MESSAGE,
//   new PhoneSubscriber('09014702323', 'austine')
// );

// observer.deregister(subscriberEvents.MESSAGE, 'austine');

// observer.notify();

/**
 *
 * STRATEGY DESIGN PATTERN
 *
 */

// const sortA = new SortA();
// const sortB = new SortB();

// const strategy = new Strategy(sortA);

// const resultA = strategy.sort();

// console.log(resultA);

// strategy.setStrategy(sortB);

// const resultB = strategy.sort();

// console.log(resultB);

const adapter = new Adapter(new Adaptee('latin printer : print english words'));

const englishPrinter = new Printer(adapter);

englishPrinter.print();
