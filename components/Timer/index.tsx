import React, { useEffect } from 'react';
import PokeBall from '@components/PokeBall';
import * as Styled from './styles';
import { useTimerContext } from '@context/index';

const RADIUS = 175;
const STROKE = 5;

function Timer() {
    const { time } = useTimerContext();

    let minAndSec = (function convertToMinAndSec() {
        let min = Math.floor(time / 60);
        let sec: string | number = time % 60;

        if (sec < 10) sec = `0${sec}`;

        return `${min}:${sec}`;
    })();

    return (
        <div>
            <Styled.Time>{minAndSec}</Styled.Time>
            <Styled.Timer>
                <Styled.Circle LoopTime={100}>
                    <circle r={RADIUS} cx={RADIUS + STROKE} cy={RADIUS + STROKE}></circle>
                </Styled.Circle>
                <PokeBall />
            </Styled.Timer>
        </div>
    );
}

export default Timer;
