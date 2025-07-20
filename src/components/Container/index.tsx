// Importa o arquivo de estilização.
// O "styles" vira um objeto que mapeia os nomes das classes CSS para garantir que os estilos sejam locais.
import styles from "./styles.module.css";

// Define o formato das "props" (propriedades) que o componente pode receber.
type ContainerProps = {
  // "children" é um tipo especial no React que representa qualquer elemento filho
  // que seja colocado dentro da tag do componente (ex: <Container>...</Container>).
  children: React.ReactNode;
};

// Exporta a função do componente para que possa ser usada em outras partes da aplicação.
export function Container({ children }: ContainerProps) {
  // O componente retorna o código JSX que será renderizado na página.
  return (
    // Cria uma <div> principal que funciona como o contêiner externo.
    // A propriedade `className` aplica a classe CSS ".container" do arquivo de estilos,
    // centralizando o conteúdo e definindo um layout flexível.
    <div className={styles.container}>
      {/* Cria uma <div> interna que envolve diretamente os elementos filhos. */}
      {/* A classe `styles.children` poderia ser usada para estilizar este contêiner interno. */}
      {/* `{children}` é onde o React renderiza o conteúdo que foi passado para o componente. */}
      <div className={styles.children}> {children}</div>
    </div>
  );
}
