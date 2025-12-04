import {getCounterValue} from './getCounterValue';
import {StateSchema} from '../../../../../app/providers/StoreProvider';

describe('getCounterValue', () => {
  test('should return value of the counter ', () => {
    const state = {
      counter: {value: 10}
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});