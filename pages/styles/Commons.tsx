import styled from 'styled-components';

interface I_Container {
    isNotHCenter?: boolean;
}

export const Container = styled.div<I_Container>`
    width: 980px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => (props.isNotHCenter ? 'flex-start' : 'center')};
    margin: auto;
`;
