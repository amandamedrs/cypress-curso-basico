# Testes automatizados com Cypress 

👋 Olá! Esse repositório reúne meus estudos e anotações do curso de testes automatizados com Cypress (básico).

## O que estou aprendendo

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para projetos de testes automatizados

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

### Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

### Executando os testes

| Modo | Comando | Descrição |
|---|---|---|
| Interativo | `npm run cy:open` | Abre o Cypress App com interface visual |
| Mobile | `npm run cy:open:mobile` | Interface visual simulando viewport mobile |
| Headless | `npm test` | Execução via terminal, sem interface gráfica |

## Estrutura do projeto

```
cypress/
├── e2e/          # Arquivos de testes
├── fixtures/     # Dados estáticos para os testes
└── support/      # Configurações e comandos customizados

lessons/
├── 01.md
├── 02.md
└── ...           # Anotações de cada aula
```

## Aulas

As anotações de cada aula estão na pasta [`lessons/`](./lessons/).

---

Curso ministrado pela [**Escola Talking About Testing**](https://talking-about-testing.vercel.app/).
