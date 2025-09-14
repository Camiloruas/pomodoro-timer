// Importa os estilos CSS do arquivo "styles.module.css".
// O uso de ".module.css" garante que as classes CSS sejam escopadas localmente para este componente.
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

// Declaração do componente funcional 'Footer'.
// Este componente não recebe nenhuma propriedade (props).
export function Footer() {
  // O componente retorna o código JSX que será renderizado como o rodapé da página.
  return (
    // O elemento HTML '<footer>' que serve como o contêiner principal do rodapé.
    // 'className={styles.footer}' aplica a classe 'footer' do nosso CSS module,
    // estilizando o rodapé de acordo com as regras definidas em 'styles.module.css'.
    <footer className={styles.footer}>
      {/* Um link '<a>' que direciona o usuário para uma página (atualmente vazia, href="") 
          para entender a técnica Pomodoro. */}
      <RouterLink href="/about-pomodoro">
        Entenda como funciona a tecnica Pomodoro{" "}
      </RouterLink>

      {/* Nota: O uso de um '<footer>' dentro de outro '<footer>' não é uma prática padrão
          e pode ser semanticamente incorreto. Geralmente, um 'div' ou 'p' seria mais apropriado aqui. */}
      <footer>
        {/* Um link '<a>' que direciona para o perfil do GitHub de Camilo Ruas.
            'target="_blank"' faz com que o link seja aberto em uma nova aba do navegador. */}
        <a href="https://github.com/Camiloruas" target="_blank">
          {/* O texto do link, que inclui direitos autorais e o nome do autor. */}
          {/* '{new Date().getFullYear()}' é uma expressão JavaScript dentro do JSX.
              'new Date()' cria um objeto de data com a data e hora atuais.
              '.getFullYear()' é um método desse objeto que retorna o ano com quatro dígitos.
              Isso garante que o ano de copyright seja sempre o ano atual. */}
          Focus Pomodoro © {new Date().getFullYear()} — by Camilo Ruas
        </a>
      </footer>
    </footer>
  );
}
