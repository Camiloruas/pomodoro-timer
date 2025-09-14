// Importa os estilos CSS específicos para este componente.
// O uso de 'styles' garante que as classes CSS sejam únicas e não entrem em conflito com outros arquivos.
import styles from "./styles.module.css";

// Define o tipo das propriedades (props) que o componente GenericHtml pode receber.
type GenericHtmlprops = {
  // 'children' é uma propriedade especial no React que representa
  // qualquer conteúdo que seja passado entre as tags de abertura e fechamento do componente.
  // React.ReactNode é um tipo que abrange tudo que o React pode renderizar: elementos JSX, strings, números, etc.
  children: React.ReactNode;
};

// Declara e exporta o componente funcional GenericHtml.
// Ele utiliza a desestruturação ({ children }) para extrair a propriedade 'children' das props recebidas.
export function GenericHtml({ children }: GenericHtmlprops) {
  // O componente retorna um elemento JSX.
  // Neste caso, é uma 'div' que servirá como um contêiner.
  return (
    <div className={styles.genericHtml}>
      {/* A classe CSS 'genericHtml' (definida em styles.module.css) é aplicada a esta div. */}
      {/* O conteúdo passado para o componente (children) é renderizado aqui dentro da div. */}
      {children}
    </div>
  );
}