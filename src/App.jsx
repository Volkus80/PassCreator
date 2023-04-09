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
import { addString, removeString } from "./store/keys/keysActions";
import { lowerLettersString, numbersString, symbolsString, upperLettersString } from "./data/data";
import { selectRange } from './/store/range/rangeSelectors';
import { selectKeys } from "./store/keys/keysSelectors";
import { createPass } from "./features/createPass";
import { getPassword } from "./store/password/passwordActions";


export default function App() {
    const upper = useSelector(selectUpperCase);
    const lower = useSelector(selectLowerCase);
    const numbers = useSelector(selectNumbers);
    const symbols = useSelector(selectSymbols);
    const range = useSelector(selectRange);
    const keys = useSelector(selectKeys);
    
    const dispatch = useDispatch();

    const setKeys = (check, str) => {
        !check ? dispatch(addString(str)) : dispatch(removeString(str))
    };

    

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
                    changeValue={() => {
                        dispatch(upperCase);
                        setKeys(upper, upperLettersString);
                    }
                    }
                />
                <Checkbox
                    text='Include Lowercase Letters'
                    value={lower}
                    changeValue={() => {
                        dispatch(lowerCase);
                        setKeys(lower, lowerLettersString);
                    }
                    }
                />
                <Checkbox
                    text='Include Numbers'
                    value={numbers}
                    changeValue={() => {
                        dispatch(setNumbers);
                        setKeys(numbers, numbersString);
                    }
                    }
                />
                <Checkbox
                    text='Include Symbols'
                    value={symbols}
                    changeValue={() => {
                        dispatch(setSymbols);
                        setKeys(symbols, symbolsString);
                    }
                    }
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
                <GenButton clickHandler={() => dispatch(getPassword(createPass(keys, range)))} />
            </Part>
        </Container>
    )
}