import { useEffect, useMemo } from 'react';
import { useLocation } from 'wouter';

import BackButton from '../components/BackButton/BackButton';
import * as Styled from './styles/catch';
import { TimeLevels } from '../redux/tomatoTimerSlice';
import PokemonData from '../../public/json/pokemons.json';

type PokemonLevel = 'level1' | 'level2' | 'level3';

function getRandomInteger(length: number) {
    return Math.floor(Math.random() * length);
}

function Catch() {
    const [, setLocation] = useLocation();

    const { level, isValidCatch } = useMemo(() => {
        // 從 sessionStorage 獲取數據
        const catchData = sessionStorage.getItem('catchToken');
        let isValidCatch = false;
        let initTime = 0;

        try {
            if (catchData) {
                const data = JSON.parse(catchData);
                isValidCatch = Boolean(data.token);
                initTime = data.initTime;
            }
        } catch (e) {
            console.error('Invalid catch data:', e);
        }

        let level: PokemonLevel = 'level1';
        if (initTime >= TimeLevels.level3) {
            level = 'level3';
        } else if (initTime >= TimeLevels.level2) {
            level = 'level2';
        }

        return { level, isValidCatch };
    }, []);

    const caughtPokemon = useMemo(() => {
        if (!isValidCatch) {
            setLocation('/');  // 如果沒有有效的 token，重定向到首頁
            return null;
        }

        const caughtPokemonId = getRandomInteger(PokemonData[level as PokemonLevel].length);
        // 捕捉完成後清除 token
        sessionStorage.removeItem('catchToken');
        return PokemonData[level as PokemonLevel][caughtPokemonId];
    }, [level, isValidCatch, setLocation]);

    useEffect(() => {
        if (!caughtPokemon) return;

        function storeCaughtPokemon() {
            const caughtPokemonList = JSON.parse(localStorage.getItem('caughtPokemon') || '[]');

            if (Array.isArray(caughtPokemonList)) {
                caughtPokemonList.push(caughtPokemon);
                localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemonList));
            } else {
                localStorage.setItem('caughtPokemon', JSON.stringify([caughtPokemon]));
            }
        }

        storeCaughtPokemon();
    }, [caughtPokemon]);

    if (!caughtPokemon) return null;

    return (
        <>
            <Styled.catchingWord>
                Congratulations! <br /> You catch a <b>{caughtPokemon.name}!</b>
            </Styled.catchingWord>
            <img
                src={`/img/${level}/${caughtPokemon.id}.png`}
                width={475}
                height={475}
                alt="caught pokemon"
            />
            <BackButton onClick={() => setLocation('/')}>
                Catch More Pokemon!
            </BackButton>
        </>
    );
}

export default Catch;
