import FactoryInterface from './abstractFactoryInterface';
import Car from './CarInterface';
import Suv from './Suv';

class SuvFactory implements FactoryInterface {
  getCar(): Car {
    return new Suv('sedan');
  }
}

export default SuvFactory;
