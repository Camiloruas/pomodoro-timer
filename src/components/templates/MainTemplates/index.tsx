import { Menu } from "lucide-react";
import { Container } from "../../Container";
import { CountDown } from "../../CountDown";
import { Footer } from "../../Footer";
import { Logo } from "../../Logo";
import "./styles/global.css";
import "./styles/theme.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>{chikdren} </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
