import styled from "styled-components";

import ProgressItem from "../UI/ProgressItem";
import Text from "../UI/Text";

const Container = styled.div`
    display: flex;
`;

const ProgressContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    max-width: 25%;
    height: 25px;
    margin-left: 15px;
`;

export default function ProgressBar() {
    const value = 4;
    let quantity = 3;
    const items = [];
    for (let i = 0; i < value; i++) {
        let active = false;
        if (quantity > 0) active = true;
        quantity--;
        items.push(<ProgressItem active={active} key={i} />)
    }

    return (
        <Container>
            <Text
                fz='1.5rem'
                color='white'
                fw='500'
            >MEDIUM</Text>
            <ProgressContainer>
                {items}
            </ProgressContainer>
        </Container>

    )
}