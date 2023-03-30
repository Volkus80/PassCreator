import styled from 'styled-components';

import { CopyButton } from './CopyButton';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Pass = styled.p`
    color:${props => props.color};
    font-size: 2rem;
    font-weight: 600;
    color: #807e7e;
`;


export default function PassBlock() {
    return (
        <Container>
            <Pass>LKDJJDjksdkj</Pass>
            <CopyButton />
        </Container>
    )
}



