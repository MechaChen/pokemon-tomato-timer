import styled from 'styled-components';

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Figure = styled.figure`
    position: relative;
    width: 24%;
    padding-top: 24%;
    height: 0;
`;

export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
