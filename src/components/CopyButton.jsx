import styled from 'styled-components';
import icon from '../icons/copy.svg';
import icon2 from '../icons/copy2.svg';

export const CopyButton = styled.button`
    border: none;
    background: none;
    outline: none;
    background-image: url(${icon2});
    background-position: center right;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: ease .3s;
    &:hover {
        background-image: url(${icon});

    }
`;