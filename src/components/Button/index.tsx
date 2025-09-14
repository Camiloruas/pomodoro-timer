// Importa os estilos CSS do arquivo "styles.module.css".
// O uso de ".module.css" indica que é um CSS Module,
// o que significa que as classes CSS são escopadas localmente para este componente para evitar conflitos de nomes.
import styles from "./styles.module.css";

// Define o tipo das propriedades (props) que o componente Button pode receber.
type ButtonProps = {
  // 'icon' é uma propriedade obrigatória.
  // 'React.ReactNode' é um tipo que representa qualquer coisa que o React pode renderizar:
  // um elemento JSX, um componente, uma string, um número, etc.
  icon: React.ReactNode;

  // 'color' é uma propriedade opcional (indicado pelo '?').
  // Ela só pode aceitar os valores "green" ou "red".
  color?: "green" | "red";

  // '& React.ComponentProps<"button">' estende as propriedades do componente Button
  // com todas as propriedades padrão de um elemento HTML <button> (como onClick, disabled, type, etc.).
  // Isso permite que você passe qualquer atributo de botão padrão para o seu componente Button.
} & React.ComponentProps<"button">;

// Declaração do componente funcional 'Button'.
// Ele recebe as propriedades 'icon', 'color' (com "green" como valor padrão se não for fornecido)
// e '...props' (que captura todas as outras propriedades passadas para o componente).
export function Button({ icon, color = "green", ...props }: ButtonProps) {
  // O componente retorna o código JSX que será renderizado.
  return (
    // '<>' e '</>' são fragmentos do React. Eles permitem agrupar múltiplos elementos
    // sem adicionar um nó extra ao DOM (como uma div).
    <>
      {/* O elemento <button> do HTML. */}
      {/* 'className' define as classes CSS para o botão. */}
      {/* `${styles.button} ${styles[color]}` é uma forma de combinar classes dinamicamente. */}
      {/* 'styles.button' aplica a classe base 'button' do nosso CSS module. */}
      {/* 'styles[color]' acessa dinamicamente a classe 'green' ou 'red' com base no valor da prop 'color'. */}
      {/* '{...props}' espalha (spread) todas as outras propriedades recebidas (como onClick, disabled, etc.) */}
      {/* diretamente no elemento <button>. */}
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {/* Renderiza o ícone que foi passado como propriedade. */}
        {icon}
      </button>
    </>
  );
}
