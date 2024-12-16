## Reset.css

O arquivo `reset.css` é utilizado para neutralizar os estilos padrões dos navegadores, garantindo uma base consistente para o desenvolvimento. Portanto, através do seletor universal (*) é possível aplicar os parâmetros para todo o documento: 
- remoção da margem padrão dos elementos; 
- remoção dos espaçamentos internos;
- **`box-sizing: border-box;`** É possível incluir o padding e a borda no cálculo total do tamanho do elemento, evitando ajustes manuais complexos.

---

## Style.css

#### Funcionalidades Gerais

1. **Definição de Estilo Global**:
   - O corpo da página é estilizado através do parâmetro `Flexbox` centralizando o conteúdo de maneira vertical e horizontal, assim como direcionando o de maneira a formar colunas: um elemento logo abaixo do outro.

2. **Estrutura e Layout Principal**:
   - O elemento `<main>` é tratado como um contêiner principal, exibido como um cartão com bordas arredondadas, sombras sutis e espaçamento interno consistente; 

3. **Estilização de Imagens**:
   - A imagem princiapl é configurada para ser responsiva, com bordas arredondadas e sombras leves;

4. **Hierarquia Tipográfica**:
   - Títulos (`h1`, `h2`) são destacados com tamanhos e cores apropriados, criando uma hierarquia visual clara que guia o usuário na navegação do conteúdo.

5. **Estilização de Listas e Tabelas**:
   - Listas ordenadas e não ordenadas são formatadas com espaçamentos e marcadores estilizados, enquanto tabelas apresentam linhas divisórias e espaçamento interno para melhorar a legibilidade.

6. **Componentização de Conteúdo**:
   - Elementos como `.container-first`, `.container-pt`, `.container-ingre`, `.container-inst`, e `.container-nutri` organizam diferentes seções da página, cada uma com estilos específicos para destacar suas funções.

7. **Foco em Acessibilidade**:
   - Links possuem estilos bem definidos e contornos visuais ao receber foco, facilitando a navegação por teclado e garantindo acessibilidade.

8. **Rodapé Informativo**:
   - A classe `.attribution` posiciona créditos ou informações adicionais no rodapé, com alinhamento central e tipografia discreta.

---

## Responsive.css

#### Funcionalidades Gerais

1. **Ajustes no Layout Global**:
   - Redução do padding geral no `<body>` e no `<main>` para maximizar o espaço utilizável em telas pequenas.
   - Centralização e remoção de sombras no `<main>` para manter o foco no conteúdo, evitando excessos visuais;

2. **Imagens e Tipografia Responsivas**:
   - A imagem é redimensionada para ocupar toda a largura disponível, mantendo proporção e suavidade nas bordas;
   - Títulos (`h1`, `h2`) têm tamanhos reduzidos e são centralizados, garantindo legibilidade e alinhamento visual;

3. **Espaçamento Compacto em Seções e Listas**:
   - Containers principais têm espaçamentos internos reduzidos para melhor aproveitamento da área disponível;
   - Listas (`ul`, `ol`) possuem menor indentação e espaçamento entre itens, otimizando o layout;

4. **Tabelas e Elementos de Texto**:
   - Redução da fonte na tabela e rodapé para que o conteúdo seja exibido sem cortes ou necessidade de rolagem horizontal.
   - Espaçamento interno nas células (`th`, `td`) é ajustado para compacidade sem comprometer a legibilidade;

5. **Foco em Links e Acessibilidade**:
   - Links utilizam fontes menores e cores consistentes para manter a identidade visual.
   - O foco (`a:focus`) é ajustado para destacar os links de maneira menos agressiva em telas pequenas.