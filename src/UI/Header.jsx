import styled from 'styled-components';
import Text from './Text';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Header() {
    return (
        <Container>
            <Text
                color='grey'
                fw='400'
                fz='1.5rem'
                mb='20px'
            >Password Generator</Text>
        </Container>
    )
}