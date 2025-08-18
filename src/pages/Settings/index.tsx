import { SaveIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../components/templates/MainTemplates";

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <Input id="workTime" LabelTex="Foco" />
          </div>
          <div className="formRow">
            <Input id="shortBreakTime" LabelTex="Descanso curto" />
          </div>
          <div className="formRow">
            <Input id="longBreakTime" LabelTex="Descanso longo" />
          </div>
          <div className="formRow">
            <Button
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
