## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_en.md)

---

# Nome do Projeto 

FAQ 

---

## Sumário

  - [Sobre](#sobre)
  - [Foto da Página](#foto-da-página)
  - [Esboço do Layout](#esboço-do-layout)
  - [Estruturação das pastas do projeto](#estruturação-das-pastas-do-projeto)
- [Desenvolvimento](#desenvolvimento)
  - [Fluxograma](#fluxograma)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Observações](#observações)

---

## Sobre

O projeto aborda uma página simples e estática de uma sessão sobre FAQ (Frequently Asked Questions) contendo, cinco perguntas mais frequentes feitas por usuários, assim como cinco respostas para as mesmas. O mesmo é uma solução ao desafio proposto pelo site do Frontend Mentor [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

---

## Foto da Página

![](./src/assets/images/screencapture.png)

---

## Esboço do Layout

![](./src/assets/images/Esboco_da_Pagina.PNG)

---

## Estruturação das pastas do projeto
```
frontend-learning-path/                     # Repositório
├── FAQ_Accordion/                          # Pasta Principal do projeto
│   ├── index.html                          # Página principal
│   ├── src/                                # Subpasta principal
│       ├── css/                            # Subpasta de estilização
│           ├── README_css_explicacao.md 
│           ├── README_css_explicacao_en.md   
│        ├── assets/                        # Subpasta secundária           
│           ├── images/                     # Subpasta de imagens
│            ├── font/                      # Subpasta da fonte
│        ├── js/                            # Subpasta de lógica de programação
│            ├── README_js_explicacao.md
│            ├── README_js_explicacao_en.md               
│              
└── README.md             
└── README_en.md
```
---

## Desenvolvimento

#### Fluxograma

```mermaid
graph TD
    A[Início] --> B[A partir da imagem fornecida]
    B --> C[Estruturar a página com base na imagem]
    C --> D[Estilizar a página com base na imagem]
    D --> E{Buscar a solução mais próxima}
    E --> F[Aplicar um script em js para que o estilo possa ser manipulado]
    F --> G[Tornar a página responsiva para dispositivos mobile]
```
---

#### Tecnologias Utilizadas

- Software - Visual Studio Code (escrever/editar o código);
- HTML5 (estrutura da página);
- CSS3 (estilização da página);
- JS (lógica de programação para interação da página); 
- Git (para interagir entre local e remoto, via linha de comando);
- [GitHub Pages](https://pages.github.com/) (para hospedar o site de maneira gratuita).

---

#### Funcionalidades

- [README - CSS3 explicações](./src/css/README_css_explicacao.md)
- [README - JS explicações](./src/js/README_js_explicacao.md)

---

#### Observações

É a terceira vez que resolvi um exercício proposto pelo **Frontend Mentor**. Como o desafio consistia em replicar uma página a partir de uma imagem, isso permitiu colocar em prática todo o aprendizado adquirido até o momento (ainda estou no início da jornada).

Enfrentei algumas dificuldades, como: centralizar corretamente o conteúdo em relação a página, assim como, dividir as imagens utilizadas como background, para que uma ficasse posicionada acima e outra baixo, sem que houvesse a sobreposição. Além disso, acredito que os espaçamentos entre os elementos não ficaram exatamente como no design original. Isso ocorre porque, ao trabalhar com uma imagem de referência, não é possível medir os espaçamentos com precisão absoluta. Ainda assim, busquei chegar o mais próximo possível do proposto.

Esse exercício foi extremamente valioso para entender melhor o processo de transformar um layout em código. Aprendi a:
- Escolher tags **HTML** que façam sentido semântico para cada elemento;
- Posicionar os elementos corretamente na estrutura da página;
- Estilizar o layout utilizando **CSS**, aplicando parâmetros como margens, paddings, cores, fontes e animações quando o cursor passar em determinado elemento;
- Utilizar a lógica de programação através da linguagem **JS**, para ser possível manipular o estilo dos elementos e com isso trazer interatividade através de ações (click do mouse, por exemplo) realizadas pelo usuário final;
- A implementar mais práticas de SEO (Search Engine Optimization), mesmo que básicas ainda.

---