import router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTimerContext } from '@context/index';
import * as Styled from './styles';

function Button() {
    const { time, setIsStart, setTime, initTime } = useTimerContext();
    const [timerId, setTimerId] = useState<any>();

    useEffect(() => {
        if (time === 0) {
            setIsStart(false);
            clearInterval(timerId);
            router.push(`/catch?initTime=${initTime}`);
        }
    }, [time]);

    function countDown() {
        let timerId = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
        setTimerId(timerId);
        setIsStart(true);
    }

    return <Styled.Container onClick={countDown}>Be Focus!</Styled.Container>;
}

export default Button;
