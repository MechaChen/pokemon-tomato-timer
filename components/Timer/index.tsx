import React from 'react';
import PokeBall from '@components/PokeBall';
import * as Styled from './styles';

function Timer() {
    const RADIUS = 175;
    const STROKE = 5;

    return (
        <div>
            <div>25:00</div>
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
