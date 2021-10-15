import GlobalStyles from './styles/Global';
import Image from 'next/image';
import { Container } from './styles/Commons';
import { useRouter } from 'next/router';
import * as Styled from './styles/catch';

function Catch() {
    const router = useRouter();

    let name = (function dependInitTimeToName() {
        switch (Number(router.query.initTime)) {
            case 30:
                return 'Mewtwo';
            case 20:
                return 'Rapidash';
            default:
                return 'Pikachu';
        }
    })();

    let imageURL = (function dependInitTimeToImage() {
        switch (Number(router.query.initTime)) {
            case 30:
                return '/pokemon/mewtwo.png';
            case 20:
                return '/pokemon/rapidash.png';
            default:
                return '/pokemon/pikachu.webp';
        }
    })();

    return (
        <Container>
            <GlobalStyles />
            <Styled.catchingWord>
                Congratulations! <br /> You catch a <b>{name}!</b>
            </Styled.catchingWord>
            <Image src={imageURL} width={600} height={613} alt="catched pokemon" />
        </Container>
    );
}

export default Catch;
