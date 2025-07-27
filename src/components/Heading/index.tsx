// Importa os estilos CSS específicos para este componente.
// O objeto 'styles' permite acessar as classes definidas no arquivo .css como se fossem propriedades.
import styles from "./styles.module.css";

// Define o tipo das propriedades (props) que o componente Heading pode receber.
type HeadingProps = {
  // 'children' representa o conteúdo que será colocado dentro da tag do componente.
  // Por exemplo, em <Heading>Meu Título</Heading>, "Meu Título" é o children.
  // React.ReactNode é um tipo que abrange qualquer coisa que o React possa renderizar.
  children: React.ReactNode;
};

// Declara e exporta o componente funcional Heading.
// Ele recebe as propriedades (props) e usa a desestruturação para extrair 'children'.
export function Heading({ children }: HeadingProps) {
  // O componente retorna o JSX que será renderizado na tela.
  return (
    // Renderiza uma div como contêiner principal.
    <div>
      {/* Renderiza um elemento de título de nível 1 (h1). */}
      {/* A classe CSS 'heading' (do arquivo styles.module.css) é aplicada a este h1 para estilização. */}
      <h1 className={styles.heading}>
        {/* O conteúdo passado como 'children' é inserido aqui dentro do h1. */}
        {children}
      </h1>
    </div>
  );
}