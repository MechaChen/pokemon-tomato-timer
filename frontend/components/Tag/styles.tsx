import styled from 'styled-components';

export const Select = styled.select`
    appearance: none; /* Remove default arrow */
    padding: 7px 10px;
    border: none;
    background-color: rgba(256, 256, 256, 0.1);
    border-radius: 14px;
    color: #fff;
    text-align: center;
`;

export const Option = styled.option`
    color: #fff;
    border-radius: 5px;
    padding: 10px 0;
    background-color: #333;
`;
