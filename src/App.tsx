import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container> 
        <Heading> Testando meu Componente</Heading>
        <section> LOGO</section>
      </Container>

      <Container> 
        <section> Menu</section>
      </Container>


      <div className="container">
        <div className=" content">
          <section>FORM</section>
        </div>
      </div>

      <div className="container">
        <div className=" content">
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}
