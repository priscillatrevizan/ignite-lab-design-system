# ignite-lab-design-system

Desenvolvido durante Ignite Lab 03

# Interface de Login

Esta é uma interface de login desenvolvida como parte de um sistema de design para uma aplicação. Ela inclui componentes como botões, caixas de seleção, campos de texto e uma página de login completa.

## Tecnologias Utilizadas

- TypeScript
- Vite (Bundler)
- Storybook (para desenvolvimento e documentação de componentes)
- Tailwind CSS (para estilização)
- Axios (para fazer requisições HTTP)

## Como Executar

1. **Instalação das Dependências:**
   npm install

2. **Executar a Aplicação:**
   npm run dev

Isso iniciará o servidor de desenvolvimento e você poderá acessar a aplicação em [http://localhost:3000](http://localhost:3000).

## Componentes

### Button

O componente Button é utilizado para criar botões interativos na aplicação.

### Checkbox

O componente Checkbox permite aos usuários selecionar uma ou mais opções de uma lista.

### Heading

O componente Heading é usado para exibir títulos e subtítulos em diferentes tamanhos.

### Logo

O componente Logo exibe o logotipo da aplicação.

### Text

O componente Text é utilizado para exibir texto simples em diferentes tamanhos.

### TextInput

O componente TextInput é utilizado para entrada de texto, podendo incluir um ícone opcional.

## Página de Login (SignIn)

A página SignIn é uma interface de login completa, onde os usuários podem inserir seu e-mail, senha e selecionar a opção para lembrar de suas credenciais por 30 dias. Após o login bem-sucedido, uma mensagem é exibida confirmando o login realizado.

## Testes

A página de login inclui testes de integração utilizando Storybook Testing Library e simulação de requisição de login com MSW (Mock Service Worker).

## Contribuindo

Sinta-se à vontade para contribuir com novos componentes, melhorias de código ou correções de bugs. Basta abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob os termos da [Licença MIT](LICENSE).
