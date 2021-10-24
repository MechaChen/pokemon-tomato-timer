import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Timer from '@components/Timer';
import PokeBall from '@components/PokeBall';
import Button from '@components/Button';
import Tag from '@components/Tag';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Commons';
import Head from 'next/head';
import store from '@redux/store';
import { Provider } from 'react-redux';
import * as Styled from './styles/home';

const RADIUS = 175;
const STROKE = 5;

const Home: NextPage = () => {
    useEffect(() => {
        if (
            typeof window !== undefined &&
            typeof window.navigator &&
            'serviceWorker' in window.navigator
        ) {
            /*
            window.navigator.serviceWorker
                .register('./sw.js', { scope: './' })
                .then((reg) => {
                    // registration worked
                    console.log('Registration succeeded. Scope is ' + reg.scope);
                })
                .catch((error) => {
                    // registration failed
                    console.log('Registration failed with ' + error);
                });
                */
        }
    }, []);

    return (
        <Provider store={store}>
            <Head>
                <title>Home Page</title>
                <link rel="shortcut icon" href="/img/favicon.ico" />
            </Head>
            <GlobalStyles />
            <Container>
                <Styled.Quote>Pokémon, gotta catch 'em all</Styled.Quote>
                <Styled.Animation>
                    <Styled.Circle LoopTime={100}>
                        <circle r={RADIUS} cx={RADIUS + STROKE} cy={RADIUS + STROKE}></circle>
                    </Styled.Circle>
                    <PokeBall />
                </Styled.Animation>
                <Timer />
                <Tag />
                <Button />
            </Container>
        </Provider>
    );
};

export default Home;
