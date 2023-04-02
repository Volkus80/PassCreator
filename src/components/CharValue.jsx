import styled from 'styled-components';

import { Container } from './PassBlock';
import Text from '../UI/Text';

const NewContainer = styled(Container)`
    margin-bottom: 1.5rem;
`;

export default function CharValue() {
    return (
        <NewContainer>
            <Text
                color='white'
                fz='1.2rem'
                fw='400'
            >
                Character Length
            </Text>
            <Text
                color='#A5FFAD'
                fz='2rem'
            >0</Text>
        </NewContainer>   
    )
}