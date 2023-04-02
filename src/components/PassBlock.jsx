import styled from 'styled-components';

import { CopyButton } from './CopyButton';
import Text from '../UI/Text';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;


export default function PassBlock() {
    return (
        <Container>
            <Text
                color='#807e7e'
                fz='2rem'
                fw='600'
            >LKDJJDjksdkj</Text>
            <CopyButton />
        </Container>
    )
}



