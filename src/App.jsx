import { useSelector, useDispatch } from "react-redux";

import { selectUpperCase } from "./store/upperCase/upperCaseSelectors";
import { upperCase } from "./store/upperCase/upperCaseActions";
import { selectLowerCase } from "./store/lowerCase/lowerCaseSelectors";
import { lowerCase } from "./store/lowerCase/lowerCaseActions";
import { Container } from "./UI/Container";
import Part from "./UI/Part";
import Header from "./UI/Header";
import PassBlock from "./components/PassBlock";
import CharValue from "./components/CharValue";
import Checkbox from "./components/Checkbox";
import Range from "./components/Range";
import Text from "./UI/Text";
import ProgressBar from "./components/ProgressBar";
import GenButton from "./components/GenButton";
import { selectNumbers } from "./store/numbers/numbersSelectors";
import { selectSymbols } from "./store/symbols/symbolsSelectors";
import { setNumbers } from "./store/numbers/numbersActions";
import { setSymbols } from "./store/symbols/symbolsActions";

export default function App() {
    const upper = useSelector(selectUpperCase);
    const lower = useSelector(selectLowerCase);
    const numbers = useSelector(selectNumbers);
    const symbols = useSelector(selectSymbols);
    const dispatch = useDispatch();
    return (
        <Container>
            <Header />
            <Part>
                <PassBlock />
            </Part>
            <Part>
                <CharValue />
                <Range />
                <Checkbox
                    text='Include Uppercase Letters'
                    value={upper}
                    changeValue={() => dispatch(upperCase)}
                />
                <Checkbox
                    text='Include Lowercase Letters'
                    value={lower}
                    changeValue={() => dispatch(lowerCase)}
                />
                <Checkbox
                    text='Include Numbers'
                    value={numbers}
                    changeValue={() => dispatch(setNumbers)}
                />
                <Checkbox
                    text='Include Symbols'
                    value={symbols}
                    changeValue={() => dispatch(setSymbols)}
                />
                <Part
                    bg_color='black'
                    direction='row'
                    height='75px'
                    justify='space-between'
                >
                    <Text
                        color='grey'
                    >STRENGTH
                    </Text>
                    <ProgressBar />
                </Part>
                <GenButton />
            </Part>
        </Container>
    )
}