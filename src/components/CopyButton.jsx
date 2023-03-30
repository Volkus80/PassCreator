import styled from 'styled-components';
import icon from '../icons/copy.svg';

export const CopyButton = styled.button`
    border: none;
    background: none;
    outline: none;
    background-image: url(${icon});
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    cursor: pointer;
`;