import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../components/templates/MainTemplates";
import type { TaskStateModel } from "../../models/TaskStateModel";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export function Home(props: HomeProps) {
  const { state, setState } = props;
  return (
    <MainTemplate>
      <Container>
        <CountDown
          formattedSecondsRemaining={state.formattedSecondsRemaining}
        />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
