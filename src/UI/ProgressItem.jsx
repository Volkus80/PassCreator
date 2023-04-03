import styled from 'styled-components';

const Item = styled.div`
    width: 8px;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.active ? 'yellow' : 'white'};
    background-color: ${props => props.active ? 'yellow' : 'transparent'};
`;

export default function ProgressItem(props) {
    const { active } = props;

    return (
        <>
            <Item active={active} />
        </>
    )
}