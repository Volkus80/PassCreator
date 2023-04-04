import styled from 'styled-components';

import { Container } from './PassBlock';
import { useSelector } from 'react-redux';
import { selectRange } from '../store/range/rangeSelectors';
import Text from '../UI/Text';

const NewContainer = styled(Container)`
    margin-bottom: 1.5rem;
`;

export default function CharValue() {
    const rangeValue = useSelector(selectRange);

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
            >{rangeValue}</Text>
        </NewContainer>
    )
}