import { Container } from './styles/Commons';
import Head from 'next/head';
import GlobalStyles from './styles/Global';
import * as Styled from './styles/timeStatistics';

const focusItems = [
    {
        name: 'Doing Side Project',
        percent: 40,
        color: '#F09683',
    },
    {
        name: 'Learning Algo',
        percent: 35,
        color: '#82D3D9',
    },
    {
        name: 'Sport',
        percent: 20,
        color: '#D6DA5C',
    },
    {
        name: 'DoingPuzzles',
        percent: 5,
        color: '#958CD0',
    },
];

const CIRCUMFERENCE = 100;
const OFFSET_TO_TOP = 25;

function TimeStatistics() {
    function calcOffset(index: number) {
        if (index === 0) return OFFSET_TO_TOP;

        let precedingTotalLength = 0;
        for (let i = 0; i < index; i++) {
            precedingTotalLength += focusItems[i].percent;
        }

        return CIRCUMFERENCE - precedingTotalLength + OFFSET_TO_TOP;
    }

    return (
        <Container isNotHCenter={true}>
            <Head>
                <title>Time Statistics Page</title>
                <link rel="shortcut icon" href="/img/favicon.ico" />
            </Head>
            <GlobalStyles />
            <h1>Time Statistics</h1>
            <div>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 42 42"
                    className="donut"
                    fill="#50aa8d"
                >
                    {focusItems.map((item: any, index: number) => (
                        <circle
                            key={index}
                            className="donut-segment"
                            cx="21"
                            cy="21"
                            r={CIRCUMFERENCE / 2 / Math.PI}
                            fill="transparent"
                            stroke={item.color}
                            strokeWidth="3"
                            strokeDasharray={`${item.percent} ${CIRCUMFERENCE - item.percent}`}
                            strokeDashoffset={calcOffset(index)}
                        />
                    ))}
                </svg>
            </div>
            <ul>
                {focusItems.map((item: any, index: number) => (
                    <Styled.FocusItem key={index}>
                        <Styled.FocusItemName>{item.name}</Styled.FocusItemName>
                        <div>{item.percent}%</div>
                    </Styled.FocusItem>
                ))}
            </ul>
        </Container>
    );
}

export default TimeStatistics;
