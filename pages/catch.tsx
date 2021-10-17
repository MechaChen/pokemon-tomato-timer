import { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import GlobalStyles from './styles/Global';
import { Container } from './styles/Commons';
import { useRouter } from 'next/router';
import * as Styled from './styles/catch';
import * as PokemonData from '../public/json/pokemons.json';

function Catch() {
    const router = useRouter();

    const level = (function getLevelByInitTime() {
        switch (Number(router.query.initTime)) {
            case 30:
                return 'level3';
            case 20:
                return 'level2';
            default:
                return 'level1';
        }
    })();

    const catchedPokemon = (function getRandomPokemonByLevel() {
        return PokemonData[level][getRandomInteger(PokemonData[level].length)];
    })();

    useEffect(() => {
        let catchedPokemons = JSON.parse(String(localStorage.getItem('catchedPokemons')));
        if (Array.isArray(catchedPokemons)) {
            catchedPokemons.push(catchedPokemon);
            localStorage.setItem('catchedPokemons', JSON.stringify(catchedPokemons));
        } else {
            localStorage.setItem('catchedPokemons', JSON.stringify([]));
        }
    }, []);

    function getRandomInteger(length: number) {
        return Math.floor(Math.random() * length);
    }

    return (
        <Container>
            <Head>
                <title>Catch Page</title>
                <link rel="shortcut icon" href="/img/favicon.ico" />
            </Head>
            <GlobalStyles />
            <Styled.catchingWord>
                Congratulations! <br /> You catch a <b>{catchedPokemon.name}!</b>
            </Styled.catchingWord>
            <Image
                src={`/img/${level}/${catchedPokemon.id}.png`}
                width={475}
                height={475}
                alt="catched pokemon"
            />
        </Container>
    );
}

export default Catch;
