
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;

const StyledRange = styled.input`
    width: 100%;
    appearance: none;
    background: #000;
    height: 5px;
    border-radius: 50px;
    margin-bottom: 20px;
    &::-moz-range-thumb {
        /* appearance: none; */
        width:1rem;
        height: 1rem;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            background-color: black;
            border: 2px solid 39e667;
        }
    }
    &::-webkit-slider-thumb {
        appearance: none;
        width:1rem;
        height: 1rem;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            background-color: black;
            border: 2px solid 39e667;
        }
    }

`;

export default function Range() {
    return (
        <Container>
            <StyledRange type='range' min='0' max='20' value='10' />
        </Container>
    )
}