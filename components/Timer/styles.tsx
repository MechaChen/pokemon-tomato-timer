import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

type PrevProps = {
    isVisible: boolean;
};

export const Prev = styled.span<PrevProps>`
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url('img/prev.png');
    background-size: cover;
    cursor: pointer;
    visibility: ${(props) => !props.isVisible && 'hidden'};
`;

export const Next = styled(Prev)`
    background-image: url('img/next.png');
    cursor: pointer;
`;

export const Time = styled.div`
    margin: 0 20px;
    text-align: center;
    font-size: 50px;
    padding: 10px 0;
    color: #fff;
`;
