import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    margin-top: 20px;
    width: 150px;
    box-sizing: border-box;
    padding: 10px 20px;
    background-color: ${(props) => (props.disabled ? '#ccc' : '#EBE8A1')};
    font-size: 20px;
    border-radius: 8px;
    color: #333;
`;
