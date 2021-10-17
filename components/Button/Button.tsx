import { useSelector, useDispatch } from 'react-redux';
import { decrementTime, setTimerId, setIsStart } from '@redux/tomatoTimerSlice';
import * as Styled from './styles';
import { selectInitTime, selectTime, selectIsStart } from '@redux/selectors';

function Button() {
    const isStart = useSelector(selectIsStart);

    const dispatch = useDispatch();

    function countDown() {
        let timerId: any = setInterval(() => {
            dispatch(decrementTime());
        }, 1000);
        dispatch(setIsStart(true));
        dispatch(setTimerId(timerId));
    }

    return (
        <Styled.Container onClick={countDown} disabled={isStart}>
            {isStart ? 'Be Focus!' : 'Start'}
        </Styled.Container>
    );
}

export default Button;
