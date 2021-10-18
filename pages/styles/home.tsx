import styled, { css } from 'styled-components';

type CircleProps = {
    LoopTime: number;
};

export const Quote = styled.blockquote`
    padding-bottom: 20px;
    font-size: 16px;
    font-style: italic;
`;

export const Animation = styled.div`
    position: relative;

    .PokeBall {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Circle = styled.svg<CircleProps>`
    --radius: 175px;
    --stroke: 5px;
    width: calc(var(--radius) * 2 + var(--stroke) * 2);
    height: calc(var(--radius) * 2 + var(--stroke) * 2);
    transform: rotateY(-180deg) rotateZ(-90deg);
    circle {
        stroke-dasharray: calc(var(---radius) * 2 * 3.14); /* 2 * radius * 3.14 */
        stroke-dashoffset: 0px;
        stroke-linecap: round;
        stroke-width: 5px;
        stroke: ${(props) => (props.LoopTime > 0 ? '#26bec9' : '#666')};
        fill: none;
        animation: ${(props) =>
            props.LoopTime > 0 &&
            css`{
                countdown ${(props: CircleProps) => props.LoopTime}s linear forwards;
            `};
    }
    @keyframes countdown {
        from {
            stroke-dashoffset: 0px;
        }
        to {
            stroke-dashoffset: calc(var(---radius) * 2 * 3.14); /* 2 * radius * 3.14 */
        }
    }
`;
