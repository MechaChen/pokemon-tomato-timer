import GlobalStyles from './styles/Global';
import Image from 'next/image';
import { Container } from './styles/Commons';
import * as Styled from './styles/catch';

function Catch() {
    return (
        <Container>
            <GlobalStyles />
            <Styled.catchingWord>
                Congratulations! <br /> You catch a <b>Pikachu!</b>
            </Styled.catchingWord>
            <Image src="/pikachu.webp" width={600} height={613} alt="catched pokemon" />
        </Container>
    );
}

export default Catch;
