import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading> MENU</Heading>
      </Container>

      <Container>
        <Heading> LOGO</Heading>
      </Container>
    </>
  );
}
