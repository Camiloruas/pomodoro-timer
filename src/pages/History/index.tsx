import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../components/templates/MainTemplates";
import { Button } from "../../components/Button";
import styles from "./styles.module.css";

export function History() {
  // const { state, setState } = props;
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttinContainer}>
            <Button
              icon={<TrashIcon />}
              color="red"
              arial-label="Apagar todo o Histórico"
              title="Apagar Histórico"
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className="reposiTable"> sdafasdfasdfadsf</div>
      </Container>
    </MainTemplate>
  );
}
