import styled from 'styled-components';

const StyledText = styled.p`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fz || '1rem'};
    font-weight: ${props => props.fw || '300'};
    margin-bottom: ${props => props.mb || '0'};
`;

export default function Text(props) {
    const { color, fz, fw, mb, children } = props;
    return (
        <>
            <StyledText
                color={color}
                fz={fz}
                fw={fw}
                mb={mb}
            >
                {children}
            </StyledText>
        </>
    )
}