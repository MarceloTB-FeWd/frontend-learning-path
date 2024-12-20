## Reset.css

O arquivo `reset.css` é utilizado para neutralizar os estilos padrões dos navegadores, garantindo uma base consistente para o desenvolvimento. Portanto, através do seletor universal (*) é possível aplicar os parâmetros para todo o documento: 
- remoção da margem padrão dos elementos; 
- remoção dos espaçamentos internos;
- **`box-sizing: border-box;`** É possível incluir o padding e a borda no cálculo total do tamanho do elemento, evitando ajustes manuais complexos.

---

## Style.css

#### Funcionalidades Gerais

1. **Estilização do Corpo da Página** `body`: 

- Define o background-color com uma tonalidade escura para criar contraste com o conteúdo.
Utiliza o Flexbox para centralizar o conteúdo vertical e horizontalmente.
- Aplica um espaçamento interno uniforme ao redor da página utilizando padding: 60px.
- Garante que a altura mínima da página ocupe toda a altura da janela com min-height: 100vh.

2. **Estilização do Elemento Principal** `main`:

- Cria um "cartão" arredondado com border-radius: 20px.
- Adiciona um fundo levemente mais claro para destacar o conteúdo.
- Utiliza o Flexbox para alinhar os elementos do cartão ao centro e os organiza verticalmente.
- Aplica espaçamento interno com padding: 20px para separar o conteúdo das bordas.

3. **Contêiner Principal do Conteúdo** `.container-first`:

- Configura o layout com Flexbox, centralizando os elementos e alinhando-os verticalmente.
- Adiciona espaçamento interno com padding: 20px e espaçamento externo superior e inferior com margin.

4. **Estilização da Imagem de Perfil** `.photo`:

- Transforma a imagem em um círculo com border-radius: 50%.
- Define um tamanho fixo de 110x110 pixels e ajusta o conteúdo da imagem sem distorções com object-fit: cover.

5. **Estilização do Título** `h1`:

- Define o tamanho da fonte (font-size: 20px) e a cor como branca para destacar o título.
- Aplica espaçamento interno (padding) e externo inferior (margin-bottom) para separar o título dos elementos adjacentes.

6. **Estilização dos Parágrafos** `.first-p` e `.second-p`:

- Diferencia a cor do texto:
`.first-p:` Cor verde vibrante para destacar informações.
`.second-p:` Cor branca para complementar o layout.
Define tamanhos de fonte menores (font-size: 14px) e espaçamentos apropriados.

7. **Estilização dos Links** `.link`:

- Cria botões com background-color escuro, bordas arredondadas (border-radius: 15px) e espaçamento interno uniforme (padding: 10px).
- Garante a largura uniforme com width: 100% para manter o alinhamento.
- Adiciona espaçamento vertical com margin-top e margin-bottom.

8. **Efeito Hover nos Links** `a:hover`:

- Muda a cor de fundo para verde vibrante ao passar o cursor.
- Ajusta a cor do texto para preto, destacando o link quando interativo.

---

## Responsive.css

#### Funcionalidades Gerais

1. **Ajustes no Layout Global**:

   - Redução do `padding` no `<body>` para otimizar o espaço disponível em dispositivos menores.
   - O `<main>` possui ajustes no `padding` e no `border-radius` para se adaptar melhor a telas compactas, mantendo um design harmonioso.

2. **Imagens e Tipografia Ajustadas**:

   - A imagem de perfil (`.photo`) é redimensionada para 80x80 pixels, garantindo que caiba em telas menores sem comprometer a proporção.
   - O título (`h1`) tem o tamanho da fonte reduzido para 18px, preservando a legibilidade em dispositivos de baixa largura.

3. **Espaçamento Compacto em Textos**:

   - Parágrafos (`.first-p` e `.second-p`) têm tamanhos de fonte ajustados para 12px e margens reduzidas, otimizando o uso do espaço sem sobrecarregar a interface.
   - Os espaçamentos verticais entre os textos são ajustados para manter a clareza e a organização.

4. **Links Otimizados**:

   - Os botões de link (`.link`) têm fonte reduzida para 12px e `padding` ajustado para 8px, ocupando menos espaço enquanto permanecem funcionais.
   - O `border-radius` foi reduzido para 10px, suavizando o design para telas pequenas.

---