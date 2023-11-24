# Trybewallet

Projeto desenvolvido como parte da avaliação no curso da Trybe. A Trybewallet é uma aplicação de controle de gastos com conversor de moedas, permitindo que o usuário adicione, remova, edite gastos e visualize um resumo em uma tabela, incluindo o total de gastos convertidos para uma moeda específica.

## Funcionalidades

- **Login:**
  - Página inicial de login na rota `/`.
  - Campos para inserção de e-mail e senha.
  - Botão "Entrar" para efetuar o login.

- **Página da Carteira:**
  - Rota `/carteira`.
  
  ### Header
  - Exibe o e-mail da pessoa usuária.
  - Mostra a despesa total.
  - Indica a moeda de câmbio em uso.
  
  ### Formulário para Adicionar Despesa
  - Componente `WalletForm` dentro do componente `Wallet`.
  - Campos para valor da despesa, descrição, seleção de moeda, método de pagamento e categoria.
  - Botão "Adicionar despesa" para salvar as informações no estado global.

  ### Tabela de Gastos
  - Componente `Table` dentro do componente `Wallet`.
  - Cabeçalho da tabela com as colunas: Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão, Editar/Excluir.

  ### Funcionalidades da Tabela
  - Alimentada pelo estado da aplicação (chave `expenses` do reducer `wallet`).
  - Botão de "Excluir" em cada linha.
  - Ao clicar em "Excluir":
    - A despesa é removida do estado global.
    - A despesa deixa de ser exibida na tabela.
    - O valor total no header é atualizado.

## Habilidades Demonstradas

- Criar e gerenciar um store Redux em aplicações React.
- Implementar reducers, actions, e dispatchers no Redux em aplicações React.
- Conectar Redux aos componentes React.
- Criar actions assíncronas na aplicação React que fazem uso do Redux.

## Testes

- Desenvolvidos testes para alcançar uma cobertura total de 60% da aplicação.

---

**Instruções para executar o projeto:**
1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute a aplicação com `npm start`.
4. Abra o navegador e acesse `http://localhost:3000`.

Divirta-se controlando seus gastos com a Trybewallet! 😊
