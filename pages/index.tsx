import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import type { NextPage } from 'next';
import Timer from '@components/Timer';
import Button from '@components/Button';
import { TimerProvider, useTimerContext } from '@context/index';

const Home: NextPage = () => {
    return (
        <TimerProvider>
            <GlobalStyle />
            <Container>
                <Timer />
                <span>study</span>
                <Button />
            </Container>
        </TimerProvider>
    );
};

const Container = styled.div`
    width: 980px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

const GlobalStyle = createGlobalStyle`
    div {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;

export default Home;
