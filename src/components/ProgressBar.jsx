import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectLowerCase } from "../store/lowerCase/lowerCaseSelectors";
import { selectNumbers } from "../store/numbers/numbersSelectors";
import { selectSymbols } from "../store/symbols/symbolsSelectors";
import { selectUpperCase } from "../store/upperCase/upperCaseSelectors";
import { selectRange } from "../store/range/rangeSelectors";
import ProgressItem from "../UI/ProgressItem";
import Text from "../UI/Text";

const Container = styled.div`
    display: flex;
`;

const ProgressContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    max-width: 25%;
    height: 25px;
    margin-left: 15px;
`;

export default function ProgressBar() {

    const upperCase = useSelector(selectUpperCase);
    const lowerCase = useSelector(selectLowerCase);
    const numbers = useSelector(selectNumbers);
    const symbols = useSelector(selectSymbols);
    const range = useSelector(selectRange);

    const params = [upperCase, lowerCase, numbers, symbols];

    const strength = () => params.sort((a, b) => b - a);

    const items = strength().map((item, i) => <ProgressItem active={item} key={i} />);

    const strengthDescription = () => {
        const selectedParams = params.filter(param => param === true);
        const strengthValue = params.length
        switch (selectedParams.length) {
            case 1: {
                return 'LOW';
            }
            case 2: {
                return 'MEDIUM'
            }
            case 3: {
                return 'MEDIUM'
            }
            case 4: {
                return 'HARD'
            }
            default: {
                return ''
            }
        }
    }



    return (
        <Container>
            <Text
                fz='1.5rem'
                color='white'
                fw='500'
            >{strengthDescription()}</Text>
            <ProgressContainer>
                {items}
            </ProgressContainer>
        </Container>

    )
}