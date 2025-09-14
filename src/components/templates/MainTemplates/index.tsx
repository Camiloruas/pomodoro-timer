import { Container } from "../../Container";
import { Footer } from "../../Footer";
import { Logo } from "../../Logo";
import { Menu } from "../../Menu";

import "../../../styles/global.css";
import "../../../styles/theme.css";

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

      <Container>{children}</Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
