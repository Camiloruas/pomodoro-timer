import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../components/templates/MainTemplates";

export function Home() {
  // const { state, setState } = props;
  return (
    <MainTemplate>
      <Container>
        <CountDown/>
      </Container>

      <Container>
        <MainForm/>
      </Container>
    </MainTemplate>
  );
}
