import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    margin-top: 20px;
    padding: 10px 15px;
    background-color: ${(props) => (props.disabled ? '#ccc' : '#26bec9')};
    font-size: 20px;
    border-radius: 5px;
    color: #fff;
`;
