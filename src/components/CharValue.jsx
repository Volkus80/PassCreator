import styled from 'styled-components';

import { Container } from './PassBlock';

const NewContainer = styled(Container)`
    margin-bottom: 1.5rem;
`;

const Title = styled.p`
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
`;

const Value = styled.p`
    color: #39e667;
    font-size: 2rem;
`;

export default function CharValue() {
    return (
        <NewContainer>
            <Title>Character Length</Title>
            <Value>0</Value>
        </NewContainer>   
    )
}