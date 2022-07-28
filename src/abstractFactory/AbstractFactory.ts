import FactoryInterface from './abstractFactoryInterface';
import Car from './CarInterface';

class AbstractFactory {
  getVehicle(factory: FactoryInterface): Car {
    return factory.getCar();
  }
}

export default AbstractFactory;
