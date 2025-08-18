# Pomodoro Timer

Um aplicativo web baseado na Técnica Pomodoro para ajudar a gerenciar o tempo de foco e descanso. Este projeto foi desenvolvido com React e Vite, com foco na criação de uma interface de usuário limpa, gerenciamento de estado complexo e uso de Web Workers para tarefas em segundo plano.

[Acesse o aplicativo](https://pomodoro-timer-six-sage.vercel.app/)

## Visão Geral

No Pomodoro Timer, você pode iniciar um ciclo de trabalho (foco), seguido por um descanso curto. Após um número definido de ciclos de foco, um descanso longo é iniciado. O aplicativo permite que você defina a duração de cada um desses períodos e mantém um histórico de suas tarefas concluídas e interrompidas.

## Tecnologias Utilizadas

- **Front-end:** React, Vite, TypeScript, React Router
- **Estilização:** CSS Modules
- **Bibliotecas:**
  - `date-fns` para formatação de datas.
  - `lucide-react` para ícones.
  - `react-toastify` para notificações.
- **Linguagem:** TypeScript
- **Ferramentas:** ESLint, Web Workers

## Funcionalidades

- Timer Pomodoro customizável (foco, descanso curto e descanso longo).
- Rastreamento automático de ciclos.
- Histórico de tarefas para visualizar ciclos concluídos e interrompidos.
- Notificações sonoras para sinalizar o fim de um ciclo.
- Página de configurações para persistir as durações do timer no `localStorage`.
- Uso de Web Worker para garantir que o timer funcione com precisão em segundo plano.

## Como Rodar Localmente

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Camiloruas/pomodoro-timer.git
    cd pomodoro-timer
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador e acesse o endereço fornecido pelo Vite (geralmente `http://localhost:5173`).

## Aprendizados

Este projeto focou na prática de:

- Criação de uma Single-Page Application (SPA) com React.
- Gerenciamento de estado global com os hooks `useReducer` e `useContext`.
- Roteamento no client-side com React Router.
- Execução de tarefas em segundo plano com Web Workers para precisão do timer.
- Persistência de dados no navegador com `localStorage`.
- Estilização com escopo de componentes usando CSS Modules.

## Status do Projeto

Projeto finalizado para fins de aprendizado.

## Contato

**Camilo Ruas**

- [GitHub](https://github.com/Camiloruas)
- [LinkedIn](https://www.linkedin.com/in/camilo-ruas-3a2a6425/)