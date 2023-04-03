import styled from 'styled-components';

const StyledText = styled.p`
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fz || '1rem'};
    font-weight: ${props => props.fw || '300'};
    margin-bottom: ${props => props.mb || '0'};
    justify-self: ${props => props.justify || 'flex-start'};    
`;

export default function Text(props) {
    const { color, fz, fw, mb, justify, children } = props;
    return (
        <>
            <StyledText
                color={color}
                fz={fz}
                fw={fw}
                mb={mb}
                justify={justify}
            >
                {children}
            </StyledText>
        </>
    )
}