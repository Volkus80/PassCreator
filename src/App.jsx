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

export default function App() {
    return (
        <Container>
            <Header />
            <Part>
                <PassBlock />
            </Part>
            <Part>
                <CharValue />
                <Range />
                <Checkbox text='Include Uppercase Letters' />
                <Checkbox text='Include Lowercase Letters' />
                <Checkbox text='Include Numbers' />
                <Checkbox text='Include Symbols' />
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