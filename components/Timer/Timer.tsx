import React, { useEffect } from 'react';
import * as Styled from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setTime, setInitTime, setIsStart } from '@redux/tomatoTimerSlice';
import { selectTime, selectInitTime, selectTimerId } from '@redux/selectors';
import { useRouter } from 'next/router';

function Timer() {
    const time = useSelector(selectTime);
    const initTime = useSelector(selectInitTime);
    const timerId = useSelector(selectTimerId);
    const dispatch = useDispatch();
    const router = useRouter();

    let minAndSec = (function convertToMinAndSec() {
        let min = Math.floor(time / 60);
        let sec: string | number = time % 60;

        if (sec < 10) sec = `0${sec}`;

        return `${min}:${sec}`;
    })();

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

    function choseTime(e: any) {
        dispatch(setTime(+e.target.value));
        dispatch(setInitTime(+e.target.value));
    }

    return (
        <>
            <select onChange={choseTime}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
            </select>
            <Styled.Time>{minAndSec}</Styled.Time>
        </>
    );
}

export default Timer;
