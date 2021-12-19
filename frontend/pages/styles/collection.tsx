import styled from 'styled-components';
import { lighten } from 'polished';

export const AllImages = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Figure = styled.figure`
    width: 90%;
    margin: 0 5% 50px;

    @media (min-width: 980px) {
        width: 20%;
        margin: 0 2.5% 50px;
    }
`;

export const ImagWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-color: ${lighten(0.1, '#50aa8d')};
    border-radius: 5px;
`;

export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const FigCaption = styled.figcaption`
    padding-top: 5px;
`;

export const ID = styled.div`
    color: #ede8a1;
`;

export const Name = styled.div`
    color: #fff;
    font-size: 20px;
    padding-top: 5px;
    font-weight: bold;
`;
