import { useState, useEffect, useRef } from 'react';
import { Container } from './styles/Commons';
import Head from 'next/head';
import GlobalStyles from './styles/Global';
import * as Styled from './styles/collection';
import PokemonData from '../public/json/pokemons.json';

interface I_Pokemon {
    id: string;
    name: string;
    src: string;
}

const allPokemons = (function getAllPokemons() {
    let all: any[] = [];

    for (let level in PokemonData) {
        PokemonData[level].forEach((Pokemon: { id: string; name: string }) => {
            all.push({
                src: `/img/${level}/${Pokemon.id}.png`,
                ...Pokemon,
            });
        });
    }

    return all;
})();

function Collection() {
    const [loadedPokemons, setLoadedPokemons] = useState<I_Pokemon[]>([]);
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        setLoadedPokemons(allPokemons.slice(0, 16));
    }, []);

    function getLastRef(node: HTMLDivElement) {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLoadedPokemons(allPokemons.slice(0, loadedPokemons.length + 8));
            }
        });

        if (node) observer.current.observe(node);
    }

    return (
        <Container isNotHCenter={true}>
            <Head>
                <title>Catch Page</title>
                <link rel="shortcut icon" href="/img/favicon.ico" />
            </Head>
            <GlobalStyles />

            <h1>Collection</h1>
            <Styled.AllImages>
                {loadedPokemons.map((Pokemon, i) => (
                    <Styled.Figure
                        key={Pokemon.id}
                        ref={i === loadedPokemons.length - 1 ? getLastRef : null}
                    >
                        <Styled.ImagWrapper>
                            <Styled.Image src={Pokemon.src} alt="Level 1 Pokemon" />
                        </Styled.ImagWrapper>
                        <Styled.FigCaption>
                            <Styled.ID>#{Pokemon.id}</Styled.ID>
                            <Styled.Name>{Pokemon.name}</Styled.Name>
                        </Styled.FigCaption>
                    </Styled.Figure>
                ))}
            </Styled.AllImages>
        </Container>
    );
}

export default Collection;
