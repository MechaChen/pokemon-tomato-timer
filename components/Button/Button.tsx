import router from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@redux/store';
import { decrementTime, setInitTime, setIsStart, setTime } from '@redux/tomatoTimerSlice';
import * as Styled from './styles';

function Button() {
    const [timerId, setTimerId] = useState<any>();

    const { time, isStart, initTime } = useSelector((state: RootState) => state.tomatoTimer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (time === 0) {
            dispatch(setIsStart(false));
            clearInterval(timerId);
            // when you try visiting last page, because of 0 time, it will redirect to catch page
            dispatch(setTime(10));
            dispatch(setInitTime(10));
            router.push(`/catch?initTime=${initTime}`);
        }
    }, [time]);

    function countDown() {
        let timerId = setInterval(() => {
            dispatch(decrementTime());
        }, 1000);
        setTimerId(timerId);
        dispatch(setIsStart(true));
    }

    return (
        <Styled.Container onClick={countDown} disabled={isStart}>
            {isStart ? 'Be Focus!' : 'Start'}
        </Styled.Container>
    );
}

export default Button;
