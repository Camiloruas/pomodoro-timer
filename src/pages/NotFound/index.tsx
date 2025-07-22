import { Container } from "../../components/Container";
import { MainTemplate } from "../../components/templates/MainTemplates";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          fugiat possimus consequatur nulla optio libero dolorum iste, quis
          tempora sequi dolorem nesciunt at tenetur soluta. Eius at enim illo
          earum.
        </p>
      </Container>
    </MainTemplate>
  );
}
