import styled from 'styled-components';

export const StyledPart = styled.div`
    border-radius: 2px;
    background-color: ${props => props.bg_color || '#393b39'};
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    padding:10px 15px;
    min-height: 20px;
    width: 100%;
    margin-bottom: 20px;
    height: ${props => props.height || 'auto'};
    justify-content: ${props => props.justify || 'flex-start'}
`;

export default function Part(props) {
    const { bg_color,
        direction,
        height,
        justify,
        children } = props;
    return (
        <>
            <StyledPart
                bg_color={bg_color}
                direction={direction}
                height={height}
                justify={justify}
            >
                {children}
            </StyledPart>
        </>
    )
}
