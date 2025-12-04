import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice', () => {
  test('should decrement value by 1', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.decrement())
    ).toEqual({ value: 9 });
  });

  test('should increment value by 1', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.increment())
    ).toEqual({ value: 11 });
  });
});
