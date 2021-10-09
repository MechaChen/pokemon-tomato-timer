import styled from 'styled-components';

const $blueBg = '#074777';
const $shadow = '#052F48';
const $white = '#fff';
const $border = '#1e1e1e';

const $pokeRed = '#912324';
const $greatBlue = '#155AC7';
const $ultraYellow = '#FBB61A';
const $ultraGray = '#444';
const $masterPurple = '#6322A9';
const $masterPink = '#BF0498';
const $loveDarkPink = '#F6558E';
const $loveLightPink = '#FFA4C4';
const $premierRed = '#E33C47';
const $levelYellow = '#E9C025';
const $levelGray = '#3E3838';
const $levelRed = '#C51B1B';
const $diveLightBlue = '#7DC6FF';
const $diveDarkBlue = '#175FB0';

type ContainerProps = {
    isStart: boolean;
};

export const Container = styled.div<ContainerProps>`
    div[class*='-ball'] {
        --pokeball-size: 250px;
        width: var(--pokeball-size);
        height: var(--pokeball-size);
        position: relative;
        @media (max-height: 500px) {
            --pokeball-size: calc(300px / 1.5);
            width: var(--pokeball-size);
            height: var(--pokeball-size);
        }
        @media (max-width: 500px) and (min-width: 350px) {
            --pokeball-size: calc(300px / 1.5);
            width: var(--pokeball-size);
            height: var(--pokeball-size);
        }
        @media (max-width: 350px) {
            --pokeball-size: calc(300px / 1.8);
            width: var(--pokeball-size);
            height: var(--pokeball-size);
        }
    }

    .border {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 100%;
        background: transparent;
        border: calc(var(--pokeball-size) * 0.04) solid #1e1e1e;
        box-sizing: border-box;
        box-shadow: inset 5px 10px 0px rgba(${$shadow}, 0.1),
            inset -13px -20px 0px rgba(${$shadow}, 0.2);
        z-index: 10;
        ${(props) =>
            props.isStart &&
            `
          animation-name: pokeWiggle;
          animation-duration: 1.25s;
          animation-fill-mode: both;
          animation-iteration-count: infinite;
        `}
        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: calc(var(--pokeball-size) * 0.06);
            background: ${$border};
            top: calc(50% - calc(var(--pokeball-size) * 0.06 / 2));
        }
        .inner {
            width: calc(var(--pokeball-size) / 3.5);
            height: calc(var(--pokeball-size) / 3.5);
            background: ${$white};
            border-radius: 100%;
            border: calc(var(--pokeball-size) * 0.04) solid ${$border};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 2px 2px 0 2px rgba(${$border}, 0.2);
            z-index: 10;
            &:before {
                content: '';
                width: calc(var(--pokeball-size) / 6);
                height: calc(var(--pokeball-size) / 6);
                background: $white;
                border-radius: 100%;
                border: calc(var(--pokeball-size) * 0.025) solid ${$border};
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    // Default Ball Styles
    .ball {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 100%;
        border: calc(var(--pokeball-size) * 0.04) solid transparent;
        box-sizing: border-box;
        background: linear-gradient(
            lighten(${$border}, 5%) 0%,
            lighten(${$border}, 5%) 50%,
            ${$white} 50%,
            ${$white} 100%
        );
        overflow: hidden;
        z-index: 5;
        ${(props) =>
            props.isStart &&
            `
            animation-name: pokeWiggle;
          animation-duration: 1.25s;
          animation-fill-mode: both;
          animation-iteration-count: infinite;   
        `}
    }

    // Shadow to add some depth
    .shadow {
        background: linear-gradient(100deg, rgba(5, 47, 72, 0.75) 0%, rgba(5, 47, 72, 0) 100%);
        width: calc(var(--pokeball-size) * 1.5);
        height: calc(var(--pokeball-size) / 3);
        border-radius: 100%;
        position: absolute;
        bottom: calc(var(--pokeball-size) / 8 * -1);
        left: calc(var(--pokeball-size) / 5);
        transform: rotate(-3deg);
        z-index: 2;
        /* animation-name: shadowWiggle;
        animation-duration: 1.25s;
        animation-fill-mode: both;
        animation-iteration-count: infinite; */
    }

    // Poké Ball
    .poke-ball {
        .ball {
            background: linear-gradient(
                ${$pokeRed} 0%,
                ${$pokeRed} 50%,
                ${$white} 50%,
                ${$white} 100%
            );
        }
    }

    // Great Ball
    #greatball:checked ~ .toggle label[for='greatball'] {
        background: lighten(${$shadow}, 5%);
    }
    #greatball:checked ~ .poke-ball {
        .ball {
            background: linear-gradient(
                ${$greatBlue} 0%,
                ${$greatBlue} 50%,
                ${$white} 50%,
                ${$white} 100%
            );
            &:before,
            &:after {
                content: '';
                position: absolute;
                border-top: calc(var(--pokeball-size) / 4) solid ${$pokeRed};
                border-left: calc(var(--pokeball-size) / 8 / 2) solid transparent;
                border-right: calc(var(--pokeball-size) / 8 / 2) solid transparent;
                width: calc(var(--pokeball-size) / 8);
                top: 5%;
            }
            &:before {
                left: 10%;
                transform: rotate(-50deg);
            }
            &:after {
                right: 10%;
                transform: rotate(50deg);
            }
        }
    }

    // Ultra Ball
    #ultraball:checked ~ .toggle label[for='ultraball'] {
        background: lighten(${$shadow}, 5%);
    }
    #ultraball:checked ~ .poke-ball {
        .ball {
            background: linear-gradient(
                $ultra-yellow 0%,
                $ultra-yellow 50%,
                $white 50%,
                $white 100%
            );
            .extras:before {
                content: '';
                position: absolute;
                width: 45%;
                height: 40%;
                background: $ultraGray;
                left: 50%;
                top: 7%;
                border-radius: 4em 4em 0 0;
                transform: translateX(-50%);
                z-index: -10;
            }
            &:before,
            &:after {
                content: '';
                position: absolute;
                width: var(--pokeball-size);
                height: calc((var(--pokeball-size) / 1.66) - 3%);
                bottom: calc((var(--pokeball-size) / 2) + 3%);
                border-radius: var(--pokeball-size) var(--pokeball-size) 0 0;
                z-index: 5;
            }
            &:before {
                box-shadow: inset 20px 0 0 $ultra-gray, inset -20px 0 0 $ultraGray;
            }
        }
    }

    // Master Ball
    #masterball:checked ~ .toggle label[for='masterball'] {
        background: lighten(${$shadow}, 5%);
    }

    #masterball:checked ~ .poke-ball {
        .ball {
            background: linear-gradient(
                $master-purple 0%,
                $master-purple 50%,
                $white 50%,
                $white 100%
            );
            &:before,
            &:after {
                content: '';
                position: absolute;
                width: calc(var(--pokeball-size) / 2.25);
                height: calc(var(--pokeball-size) / 2.25);
                background: ${$masterPink};
                border-radius: 100%;
                top: -1.25em;
            }
            &:before {
                left: -2em;
                transform: rotate(-50deg);
            }
            &:after {
                right: -2em;
                transform: rotate(50deg);
            }
            .extras:before {
                content: 'M';
                width: 50px;
                height: 50px;
                position: absolute;
                left: 50%;
                transform: translate(-50%, 90%);
                text-align: center;
                color: white;
                font-family: 'Hind', sans-serif;
                font-weight: 700;
                font-size: 2.5em;
            }
        }
    }

    // Wiggle animation
    @keyframes pokeWiggle {
        from {
            transform: none;
        }
        20% {
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
        }
        40% {
            transform: translate3d(15%, 0, 0) rotate3d(0, 0, 1, 5deg);
        }
        60% {
            transform: translate3d(-7%, 0, 0) rotate3d(0, 0, 1, -10deg);
        }
        to {
            transform: none;
        }
    }

    // Shadow Animation -- less dramatic than pokeball
    @keyframes shadowWiggle {
        from {
            transform: rotate(-3deg);
        }
        20% {
            transform: translate3d(-2%, 0, 0) rotate(-3deg);
        }
        40% {
            transform: translate3d(2%, 0, 0) rotate(-3deg);
        }
        60% {
            transform: translate3d(-1%, 0, 0) rotate(-3deg);
        }
        to {
            transform: rotate(-3deg);
        }
    }
`;
