import React from 'react';
import type { NextPage } from 'next';
import Timer from '@components/Timer';
import Button from '@components/Button';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Commons';
import { TimerProvider } from '@context/index';

const Home: NextPage = () => {
    return (
        <TimerProvider>
            <GlobalStyles />
            <Container>
                <Timer />
                <span>study</span>
                <Button />
            </Container>
        </TimerProvider>
    );
};

export default Home;
