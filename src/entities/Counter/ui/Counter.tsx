import {Button} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from 'entities/Counter/modal/slices/CounterSlice';
import {getCounterValue} from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const {t} = useTranslation();
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={incrementHandler}>
        {t('increment')}
      </Button>
      <Button onClick={decrementHandler}>
        {t('decrement')}
      </Button>
    </div>
  );
};
