import FactoryInterface from './abstractFactoryInterface';
import Sedan from './Sedan';
import Car from './CarInterface';

class SedanFactory implements FactoryInterface {
  getCar(): Car {
    return new Sedan('sedan');
  }
}

export default SedanFactory;
