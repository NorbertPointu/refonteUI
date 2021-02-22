import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme } from 'enzyme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import createChaiJestDiff from 'chai-jest-diff';
import createChaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai'

chai
  .use(dirtyChai)
  .use(sinonChai)
  .use(createChaiJestDiff())
  .use(createChaiEnzyme())

configureEnzyme({ adapter: new Adapter() })
