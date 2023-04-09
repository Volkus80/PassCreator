import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { rangeModify } from '../store/range/rangeActions';
import { selectRange } from '../store/range/rangeSelectors';

const Container = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 20px;
`;

const StyledRange = styled.input`
    width: 100%;
    appearance: none;
    background: #000;
    height: 5px;
    border-radius: 50px;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width:1rem;
        height: 1rem;
        cursor: pointer;
        background-color: #fff;
        border-radius: 50%;
        z-index: 5;
        :hover {
            background-color: #000;
            border: solid 2px #A5FFAD;
        }
    }

`;

const Progress = styled.div`
    width: ${props => {
        const width = (props.value-5) * 100 / 15;
        const more = 16 * width / 100 - .5;
        return `calc(${width}% - ${more}px)`;
    }};
    background: #A5FFAD;
    height: 5px;
    border-top-left-radius: 2.5px;
    border-bottom-left-radius: 2.5px;
    position: absolute;
    top: 50%;
`;

export default function Range() {
    const value = useSelector(selectRange);
    const dispatch = useDispatch();
    const handlValue = (e) => dispatch(rangeModify(e.target.value));

    return (
        <Container>
            <StyledRange
                type='range'
                min='5'
                max='20'
                step='1'
                value={value}
                onChange={handlValue}
            />
            <Progress value={value} />
        </Container>
    )
}