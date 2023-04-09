import styled from "styled-components";
import { useState } from "react";

import activeArrow from '../icons/arrow-right-active.svg'
import arrow from '../icons/arrow-right.svg'

import Text from "../UI/Text";

const Button = styled.div`
    display: flex;
    border: solid 2px #A5FFAD;
    background-color: #A5FFAD;
    width:100%;
    height: 75px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: transparent;
    }
`;

const Arrow = styled.div`
    width: 1rem;
    height: 1rem;
    background-image: url(${props => props.active ? activeArrow : arrow});
    background-position: center;
    background-size: contain;
    margin-left: 20px;
`;

export default function GenButton({clickHandler}) {
    const [active, setActive] = useState(false);
    return (
        <Button
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
            onClick={clickHandler}
        >
            <Text
                color={active ? '#A5FFAD' : '#000'}
            >GENERATE</Text>
            <Arrow active={active} />
        </Button>
    )
}
