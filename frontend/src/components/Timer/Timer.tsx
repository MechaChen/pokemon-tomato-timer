import { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';
import { useSelector, useDispatch } from 'react-redux';

import * as Styled from './styles';
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
} from '../../redux/tomatoTimerSlice';
import { selectTime, selectInitTime, selectTimerId, selectIsStart } from '../../redux/selectors';
import { TimeLevels } from '../../redux/tomatoTimerSlice';

function Timer() {
    const time = useSelector(selectTime);
    const initTime = useSelector(selectInitTime);
    const isStart = useSelector(selectIsStart);
    const timerId = useSelector(selectTimerId);
    const dispatch = useDispatch();
    const [, setLocation] = useLocation();

    const minAndSec = useMemo(() => {
        let min = Math.floor(time / 60);
        let sec: string | number = time % 60;

        if (sec < 10) sec = `0${sec}`;

        return `${min}:${sec}`;
    }, [time]);

    useEffect(
        function resetHomeState() {
            if (time === 0) {
                const token = Math.random().toString(36).substring(2);
                sessionStorage.setItem('catchToken', JSON.stringify({
                    token,
                    initTime
                }));
                
                setLocation('/catch');
                
                dispatch(setTime(initialState.time));
                dispatch(setIsStart(initialState.isStart));
                dispatch(setTimerId(initialState.timerId));
                dispatch(setInitTime(initialState.initTime));
                clearInterval(timerId);
            }
        },
        [time, initTime, timerId, dispatch, setLocation]
    );

    const clickPrev = useCallback(() => {
        if (time < TimeLevels.level1) return;

        dispatch(decrementTime(TimeLevels.interval));
        dispatch(decrementInitTime(TimeLevels.interval));
    }, [time]);

    const clickNext = useCallback(() => {
        if (time > TimeLevels.maxLevel) return;

        dispatch(incrementTime(TimeLevels.interval));
        dispatch(incrementInitTime(TimeLevels.interval));
    }, [time]);

    const isPrevVisible = useMemo(() => (
        time > TimeLevels.level1 && !isStart
    ), [time, isStart]);

    const isNextVisible = useMemo(() => (
        time < TimeLevels.maxLevel && !isStart
    ), [time, isStart]);

    return (
        <Styled.Container>
            <Styled.Prev
                onClick={clickPrev}
                isVisible={isPrevVisible}
            />
            <Styled.Time>
                {minAndSec}
            </Styled.Time>
            <Styled.Next
                onClick={clickNext}
                isVisible={isNextVisible}
            />
        </Styled.Container>
    );
}

export default Timer;
