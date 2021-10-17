import React from 'react';
import type { NextPage } from 'next';
import Timer from '@components/Timer';
import PokeBall from '@components/PokeBall';
import Button from '@components/Button';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Commons';
import Head from 'next/head';
import store from '@redux/store';
import { Provider } from 'react-redux';
import * as Styled from './styles/home';

const RADIUS = 175;
const STROKE = 5;

const Home: NextPage = () => {
    return (
        <Provider store={store}>
            <Head>
                <title>Home Page</title>
                <link rel="shortcut icon" href="/img/favicon.ico" />
            </Head>
            <GlobalStyles />
            <Container>
                <Timer />
                <Styled.Animation>
                    <Styled.Circle LoopTime={100}>
                        <circle r={RADIUS} cx={RADIUS + STROKE} cy={RADIUS + STROKE}></circle>
                    </Styled.Circle>
                    <PokeBall />
                </Styled.Animation>
                <span>study</span>
                <Button />
            </Container>
        </Provider>
    );
};

export default Home;
