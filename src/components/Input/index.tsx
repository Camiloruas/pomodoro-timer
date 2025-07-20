// Importa o arquivo de estilização local para este componente.
import styles from "./styles.module.css";

// Define os tipos das propriedades (props) que o componente Input pode receber.
type InputProps = {
  // `id` é uma string obrigatória para associar o label ao input.
  id: string;
  // `LabelTex` é o texto que será exibido na tag <label>.
  LabelTex: string;
  // `& React.ComponentProps<"input">` permite que o componente aceite
  // todas as outras propriedades padrão de um elemento <input> do HTML (como `type`, `placeholder`, `onChange`, etc.).
} & React.ComponentProps<"input">;

// Exporta a função do componente Input.
// Ele recebe `id`, `LabelTex` e usa o "rest operator" (`...rest`) para agrupar
// todas as outras propriedades do input em um único objeto.
export function Input({ id, type, LabelTex, ...rest }: InputProps) {
  return (
    // Usa um Fragment (`<>...</>`) para agrupar o label e o input sem adicionar um nó extra ao DOM.
    <>
      {/* A tag <label> melhora a acessibilidade. O `htmlFor` aponta para o `id` do input. */}
      <label htmlFor={id}> {LabelTex}</label>
      {/* 
        O elemento <input> em si.
        - `className`: Aplica a classe CSS `.input` para estilização.
        - `id`: Define o ID, que é usado pelo label.
        - `type`: Define o tipo do input (ex: "text", "number").
        - `{...rest}`: Espalha todas as outras propriedades recebidas (como `value`, `placeholder`, `disabled`, etc.) no elemento input.
      */}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
