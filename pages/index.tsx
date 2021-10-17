import React from 'react';
import type { NextPage } from 'next';
import Timer from '@components/Timer';
import Button from '@components/Button';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Commons';
import { TimerProvider } from '@context/index';
import Head from 'next/head';
import store from '@redux/store';
import { Provider } from 'react-redux';

const Home: NextPage = () => {
    return (
        <Provider store={store}>
            <TimerProvider>
                <Head>
                    <title>Home Page</title>
                    <link rel="shortcut icon" href="/img/favicon.ico" />
                </Head>
                <GlobalStyles />
                <Container>
                    <Timer />
                    <span>study</span>
                    <Button />
                </Container>
            </TimerProvider>
        </Provider>
    );
};

export default Home;
