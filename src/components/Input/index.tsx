import styles from "./styles.module.css";


type InputProps = {

  id: string;
  LabelTex: string;
} & React.ComponentProps<"input">;

export function Input({ id, type, LabelTex, ...rest}: InputProps) {
  return (
    <>
      <label htmlFor={id}> {LabelTex}</label>
      <input className = {styles.input} id={id} type={type}{...rest} />
    </>
  );
}
