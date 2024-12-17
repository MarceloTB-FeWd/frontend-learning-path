## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_en.md)

---

## Sobre

Projeto desenvolvido em conjunto ao professor @bonieky (Bonieky Lacerda), em uma vídeo aula (gravada) online e gratuita na plataforma: Youtube. Realizada no dia 25 de Abril de 2024.

---

## Nome do Projeto

Projeto - Conversor Monetário 

O projeto representa o primeiro contato com o foque no desenvolvimento de um sistema em JavaScript, por isso,
deve ser considerado como uma primeira etapa de uma longa caminhada nessa liguagem de programação, assim como, no desenvolvimento web.

Este site foi criado com HTML, CSS e JavaScript, como parte do meu aprendizado de desenvolvimento web.
O mesmo é um conversor monetário simplificado (realiza conversão apenas entre Dólar Americano e Real Brasileiro - $ - R$).

---

## Funcionalidades

- Está otimizado para o tamanho de até 750px;
- Desenvolver: Eventos para identificar quando houve o toque no teclado;
- Desenvolver: Evento que quando clicar fora do campo, deixa o campo formatado;
- Definir o valor padrão de preenchimento do campo com a string e converter de dólar para real;
- Desenvolver Funções para:
- Ajustar o valor, trocar a vírgula do número pelo ponto;
- Utilizar a função de formatar com a biblioteca de internacionalização do JS;
- Retornar o valor formatado;
- Substituir a "," pelo ".";
- Transforma o texto em número;
- Realiza uma verificação de segurança, caso alguém digitar algo errado, o sistema continua funcionando;
- Converter o valor de dólar para real;
- Mostrar no campo referente ao real;
- Converter o valor de real para dólar;
- Mostrar no campo referente ao dólar.

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
simple-currency-converter/    # Repositório
├── Conversor_Monetario/      # Pasta Principal
│   ├── index.html            # Página principal
│   ├── src/                  # Subpasta principal
│       ├── css/              # Subpasta de estilização
        ├── assets/           # Subpasta secundária           
│           ├── imagem/       # Subpasta de imagens
            ├── font/         # Subpasta da fonte         
│       └── js/               # Subpasta de interação
└── README.md
└── README_en.md
```

---

## Observação

O arquivo "index.js" não teve o intuito de trabalhar com requisições via API,
portanto utilizou-se um valar de câmbio fixo (só como forma experimental).

A parte de estilização do site criei de acordo com os estudos e conhecimentos adquiridos até o presente momento.

---