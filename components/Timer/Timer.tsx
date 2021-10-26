import React, { useEffect } from 'react';
import * as Styled from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
    initialState,
    setIsStart,
    setTimerId,
    setInitTime,
    setTime,
    decrementTime,
    incrementTime,
    decrementInitTime,
    incrementInitTime,
} from '@redux/tomatoTimerSlice';
import { selectTime, selectInitTime, selectTimerId, selectIsStart } from '@redux/selectors';
import { TimeLevels } from '@redux/tomatoTimerSlice';
import { useRouter } from 'next/router';

function Timer() {
    const time = useSelector(selectTime);
    const initTime = useSelector(selectInitTime);
    const isStart = useSelector(selectIsStart);
    const timerId = useSelector(selectTimerId);
    const dispatch = useDispatch();
    const router = useRouter();

    let minAndSec = (function convertToMinAndSec() {
        let min = Math.floor(time / 60);
        let sec: string | number = time % 60;

        if (sec < 10) sec = `0${sec}`;

        return `${min}:${sec}`;
    })();

    useEffect(
        function resetHomeState() {
            if (time === 0) {
                router.push(`/catch?initTime=${initTime}`);
                dispatch(setTime(initialState.time));
                dispatch(setIsStart(initialState.isStart));
                dispatch(setTimerId(initialState.timerId));
                dispatch(setInitTime(initialState.initTime));
                clearInterval(timerId);
            }
        },
        [time]
    );

    function clickPrev() {
        if (time < TimeLevels.level1) return;

        dispatch(decrementTime(TimeLevels.interval));
        dispatch(decrementInitTime(TimeLevels.interval));
    }

    function clickNext() {
        if (time > TimeLevels.maxLevel) return;

        dispatch(incrementTime(TimeLevels.interval));
        dispatch(incrementInitTime(TimeLevels.interval));
    }

    return (
        <Styled.Container>
            <Styled.Prev onClick={clickPrev} isVisible={time > TimeLevels.level1 && !isStart} />
            <Styled.Time>{minAndSec}</Styled.Time>
            <Styled.Next onClick={clickNext} isVisible={time < TimeLevels.maxLevel && !isStart} />
        </Styled.Container>
    );
}

export default Timer;
