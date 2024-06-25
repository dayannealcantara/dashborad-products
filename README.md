# Visão Geral (React - Vite - TypeScript )

Este frontend é parte de  um sistema desenvolvido para um teste de seleção onde se deve criar um protótipo de dashboard para um sistema que recebe pedidos.

## Tecnologias Utilizadas

* React: Utilizado como biblioteca principal para a construção da interface de usuário.
* TypeScript: Utilizado para adicionar tipagem estática ao JavaScript, garantindo um código mais robusto e menos propenso a erros.

## Requistos funcionais da aplicação

* Listagem: Permite informações detalhadas sobre cada pedido, incluindo: nome do produto, valor, email e status de processamento.
* Card de total do pedido: Informções sobre a quantidade de produtos do pedido
* Card de valor total do pedido: Informções sobre o valor total dos produtos do pedido

## Api

Usou-se a biblioteca externa json-server para simular uma API, onde os dados estão armazenados em um arquivo db.bjson (fornecido pela empresa)

## Local de Desenvolvimento

```bash
# Instalar dependências do package.json
$ yarn 

# Executar projeto
$ yarn dev

# Executar servidor
$ yarn server

# Executar testes
$ yarn test