import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { CopyButton } from './CopyButton';
import Text from '../UI/Text';
import { selectPassword } from '../store/password/passwordSelectors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;


export default function PassBlock() {
    const keysStr = useSelector(selectPassword);
    return (
        <Container>
            <Text
                color='#807e7e'
                fz='1.5rem'
                fw='600'
            >{keysStr}</Text>
            <CopyButton onClick={() => navigator.clipboard.writeText(keysStr) } />
        </Container>
    )
}



