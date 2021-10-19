import { Container } from './styles/Commons';
import Head from 'next/head';
import GlobalStyles from './styles/Global';
import * as Styled from './styles/collection';
import PokemonData from '../public/json/pokemons.json';

enum Level {
    level1,
    level2,
    level3,
}

function Collection() {
    const allImgSrcs = (function () {
        let all = [];

        for (let level in PokemonData) {
            PokemonData[level].forEach((Pokemon: { id: string; name: string }) => {
                all.push(`/img/${level}/${Pokemon.id}.png`);
            });
        }

        return all;
    })();

    return (
        <Container isNotHCenter={true}>
            <Head>
                <title>Catch Page</title>
                <link rel="shortcut icon" href="/img/favicon.ico" />
            </Head>
            <GlobalStyles />

            <h1>Collection</h1>
            <Styled.ImageWrapper>
                {allImgSrcs.map((src) => (
                    <Styled.Figure key={src}>
                        <Styled.Image src={src} alt="Level 1 Pokemon" />
                    </Styled.Figure>
                ))}
            </Styled.ImageWrapper>
        </Container>
    );
}

export default Collection;
