import { useState } from "react";
import styled from "styled-components";
import checkmark from '../icons/checkmark.svg';

// const Input = styled.input.attrs({
//     type: checkbox,
// })`
//     display: none;
// `;

const Label = styled.label`
    color: white;
    font-weight: 400;
    margin-bottom: 1.5rem;
    & input {
        display: none;
        &:checked ~ span {
            background-color: #39e667;
            background-image: url(${checkmark});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    & span {
        display: inline-block;
        margin-right: 1rem;
        position: relative;
        width: 1rem;
        height: 1rem;
        border: solid 1px white;
        &:hover {
            border-color: #39e667;
        }
        
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export default function Checkbox({ text }) {
    const [checked, setChecked] = useState(false);
    const handleChecked = () => {
        setChecked(!checked);
    }
    return (
        <Container>
            <Label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChecked}
                />
                <span />
                {text}
            </Label>
        </Container>
    )
}


