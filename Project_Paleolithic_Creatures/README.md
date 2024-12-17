## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_en.md)

---

## Sobre

Realizado durante o evento de Imersão (Do zero ao Programador) que ocorreu entre os dias 7 e 13 de Outubro de 2024, focado em pessoas com zero conhecimento nas linguagens de Programação: CSS e Java Script, utilizando o HTML como marcação/estrutura para a criação de uma página web, oferecido de maneira online e gratuita pelo: @DevemDobro.

---

## Nome do Projeto

Projeto - Criaturas do Paleolítico

O projeto representa o primeiro contato com o desenvolvimento web, levando em consideração a parte do Front-end, por isso é bem simples
e deve ser considerado como o primeiro passo de uma longa caminhada.

Este site foi criado com HTML, CSS e JavaScript, como parte do meu aprendizado de desenvolvimento web.
O mesmo é um catálogo de criaturas baseadas em como talvez seriam os personagens do folclore brasileiro pintados nas paredes de cavernas na época da Pedra Lascada com uma interface simples, amigável e interativa.

---

## Funcionalidades

- Está otimizado para o tamanho de até 750px;
- Exibir uma lista de cartões das criaturas;
- Mostrar informações detalhadas de cada criatura ao clicar;
- Ativar a criatura selecionada na listagem ao clicar;
- Desativar a criatura aberta como padrão na listagem ao clicar em outra criatura;
- Mostrar o cartão da criatura selecionada ao clicar;
- Esconder o cartão da criatura assim que um novo cartão de criatura for selecionado ao clicar, deixando apenas o selecionado como ativo na tela.

---

## Tecnologias Utilizadas

- Software - Visual Studio Code (escrever o código);
- HTML5 (estrutura do site);
- CSS3 (estilização do site);
- JavaScript (interação do usuário com o site);
- Git (para interagir entre local e remoto, via linha de comando);
- [GitHub Pages](https://pages.github.com/) (para hospedar o site de maneira gratuita).

---

## Estruturação das pastas no repositório
```
projeto-web-iniciante/        # Repositório
├── Criaturas_Paleo/          # Pasta Principal
│   ├── index.html            # Página principal
│   ├── src/                  # Subpasta principal
│       ├── css/              # Subpasta de estilização
        ├── assets/           # Subpasta secundária           
│           ├── imagens/      # Subpasta de imagens
            ├── font/         # Subpasta da fonte         
│       └── js/               # Subpasta de interação
└── README.md
└── README_en.md
```

---

## Observação

O projeto estava gerando um erro no qual, o arquivo "index.js" acessava o "id", mas estava retornando valor = (null),
portanto tive que acrescentar uma chamada também da ".listagem", já que assim, com o clique de interação os "id" seriam selecionados sem
que houvessem erros. Visto que no "index.html" tudo relacionado ao "id" estava conferindo, contudo não dava certo.
Após acrescentar e utilizar logs para verificar, foi possível sanar o erro.

---