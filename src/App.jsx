import { Container } from "./UI/Container";
import { Part } from "./UI/Part";
import { Header } from "./UI/Header";
import { CopyButton } from "./components/CopyButton";
import PassBlock from "./components/PassBlock";
import CharValue from "./components/CharValue";

export default function App() {
    return (
        <Container>
            <Header>Password Generator 10</Header>
            <Part>
                <PassBlock />
            </Part>
            <Part>
                <CharValue />
            </Part>
        </Container>
    )
}