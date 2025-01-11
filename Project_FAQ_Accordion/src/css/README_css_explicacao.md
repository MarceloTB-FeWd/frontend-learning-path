## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README_css_explicacao.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_css_explicacao_en.md)

---

## Reset.css

O arquivo `reset.css` é utilizado para neutralizar os estilos padrões dos navegadores, garantindo uma base consistente para o desenvolvimento. Portanto, através do seletor universal (*) é possível aplicar os parâmetros para todo o documento: 
- remoção da margem padrão dos elementos; 
- remoção dos espaçamentos internos;
- remoção dos símbolos referentes aos itens listados;
- **`box-sizing: border-box;`** É possível incluir o padding e a borda no cálculo total do tamanho do elemento, evitando ajustes manuais complexos.

---

## Style.css

#### Funcionalidades Gerais

1. **Estilização do Corpo da Página** `body`: 

- Define o background contendo uma imagem svg para ocupar a parte superior e uma coloração para ocupar a parte inferior sem que ocorra a sobreposição e fique metade para cima e para baixo;
- Utiliza o Flexbox para centralizar o conteúdo vertical e horizontalmente e também direciona o conteúdo em coluna;
- Aplica um espaçamento interno uniforme ao redor da página utilizando padding: 50px;
- Garante que a altura da página ocupe toda a altura da janela com height: 100vh.

2. **Estilização do Elemento Principal** `main`:

- Cria um "cartão" arredondado com border-radius: 15px;
- Adiciona um fundo claro para destacar o conteúdo;
- Utiliza o Flexbox para alinhar os elementos do cartão ao centro e os organiza verticalmente, e direceiona em forma de coluna;
- Aplica espaçamento interno com padding: 20px para separar o conteúdo das bordas;
- A largura do elemento é de 50% para ficar centralizado na página, com o máximo de 600px e o mínimo de 300px.

3. **Contêiner do título e svg** `.container-title-svg`:

- Configura o layout com Flexbox, centralizando os elementos e alinhando-os lado a lado;
- Adiciona espaçamento interno com padding: 20px;
- Adiciona um gap de 25px entre os elementos;
- Aplica uma margim-bottom de 10px como espaçamento inferior em relação ao próximo elemento.

4. **Contêiner dos elementos da FAQ** `.faq-items`:

- Aplica um border-bottom para indicar uma separação entre os elementos.

5. **Classes dentro do Contêiner da FAQ** `.faq-question`, `.icon`:

- Aplica o display - flex, com espaçamento entre os elementos, assim como alinhados ao centro;
- Remoção da borda que vem por padrão nos botões, assim como sua cor de fundo;
- Aplicado uma largura de 100% para que o botão preencha todo o espaço do elemento pai;
- Aplicado o efeito hover no botão, para o usuário ter a impressão ao passar o cursor sobre, assim como o efeito do cursor também;
- O ícone apresenta display flex, para ficar alinhado e justificado ao centro;
- Altura e largura fixa;
- Cor de fundo e borda arredondada com espaçamento interno de 10px.

6. **Contêiner dos elementos referentes a resposta** `.faq-answer`:

- Tamanho da fonte e cor característica diferenciando dos outros textos;
- O display é none, pois deve ficar sem aparecer, já que através do `script.js` que o mesmo será ativado e desativado.

7. **Estilização quando o ícone estiver ativo** `.faq-question.active .icon`:

- Quando ativo, muda a cor de fundo e também o símbolo, o resto permanece igual ao do mencionado no `.icon`.

8. **Contêiner do rodapé e seus elementos** `.container-footer-links`:

- O display é flex, para que os elementos fiquem alinhados ao centro e também lado a lado;
- Aplicado margin-top e bottom com 10px em relação aos outros elementos;
- Aplicado espaçamento interno de 10px.

9. **Estilização dos Links e da descrição** `.link`, `.p-footer`:

- Texto com tamanho de fonte e cor característica para diferenciar dos outros textos;
- Espaçamento interno de 10px;
- Margin-bottom de 10px.

10. **Efeito Hover nos Links** `a:hover`:

- Muda a cor ao passar o cursor;
- Ajusta a cor do texto para roxo, destacando o link quando interativo.

---

## Responsive.css

#### Funcionalidades Gerais

1. **Ajustes no Layout Global**:

- Reduções e otimizações para tamanho de tela de até 375px.

---