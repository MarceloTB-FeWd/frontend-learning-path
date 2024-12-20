## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_en.md)

---

# Nome do Projeto 

Perfil de links sociais 

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

O projeto aborda uma página simples e estática de um "cartão" contendo, foto, uma breve descrição e também cinco diferentes perfis sociais. O mesmo é uma solução ao desafio proposto pelo site do Frontend Mentor [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ).

---

## Foto da Página

![](./src/assets/images/screencapture.png)

---

## Esboço do Layout

![](./src/assets/images/Esboco_do_Layout.PNG)

---

## Estruturação das pastas do projeto
```
frontend-learning-path/                     # Repositório
├── Social_links_profile_main/              # Pasta Principal do projeto
│   ├── index.html                          # Página principal
│   ├── src/                                # Subpasta principal
│       ├── css/                            # Subpasta de estilização
            ├── README_css_explicacao.md 
            ├── README_css_explicacao_en.md   
        ├── assets/                         # Subpasta secundária           
│           ├── images/                     # Subpasta de imagens
            ├── font/                       # Subpasta da fonte         
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
    B --> C[Estrturar a página com base na imagem]
    C --> D[Estilizar a página com base na imagem]
    D --> E{Buscar a solução mais próxima}
    E --> F[Tornar a página responsiva para dispositivos mobile]
```
---

#### Tecnologias Utilizadas

- Software - Visual Studio Code (escrever/editar o código);
- HTML5 (estrutura da página);
- CSS3 (estilização da página);
- Git (para interagir entre local e remoto, via linha de comando);
- [GitHub Pages](https://pages.github.com/) (para hospedar o site de maneira gratuita).

---

#### Funcionalidades

- [README - CSS3 explicações](./src/css/README_css_explicacao.md)

---

#### Observações

Foi a segunda vez que resolvi um exercício proposto pelo **Frontend Mentor**. Como o desafio consistia em replicar uma página a partir de uma imagem, isso permitiu colocar em prática todo o aprendizado adquirido até o momento (ainda estou no início da jornada).

Enfrentei algumas dificuldades, como: centralizar corretamente o conteúdo em relação a página, assim como, deixar a borda da imagem de forma circular. Além disso, acredito que os espaçamentos entre os elementos não ficaram exatamente como no design original. Isso ocorre porque, ao trabalhar com uma imagem de referência, não é possível medir os espaçamentos com precisão absoluta. Ainda assim, busquei chegar o mais próximo possível do proposto.

Esse exercício foi extremamente valioso para entender melhor o processo de transformar um layout em código. Aprendi a:
- Escolher tags **HTML** que façam sentido semântico para cada elemento;
- Posicionar os elementos corretamente na estrutura da página;
- Estilizar o layout utilizando **CSS**, aplicando parâmetros como margens, paddings, cores, fontes e animações quando o cursor passar em determinado elemento;
- A implementar mais práticas de SEO (Search Engine Optimization), mesmo que básicas ainda.

---