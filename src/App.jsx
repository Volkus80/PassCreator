import { Container } from "./UI/Container";
import { Part } from "./UI/Part";
import { Header } from "./UI/Header";
import { CopyButton } from "./components/CopyButton";
import PassBlock from "./components/PassBlock";
import CharValue from "./components/CharValue";
import Checkbox from "./components/Checkbox";
import Range from "./components/Range";

export default function App() {
    return (
        <Container>
            <Header>Password Generator 10</Header>
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
            </Part>
        </Container>
    )
}