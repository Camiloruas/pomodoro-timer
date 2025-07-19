import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero((prevState) => prevState + 1);
  }

  return (
    <>
      <Heading>
        Número: <span>{numero}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input
              LabelTex={numero.toString()}
              id="meuInput"
              type="text"
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <Button icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
