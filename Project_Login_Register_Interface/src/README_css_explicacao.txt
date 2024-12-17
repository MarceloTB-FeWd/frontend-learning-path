O arquivo - "reset.css" serviu para remover o que vem por padrão nos navegadores relacionados ao estilo da página.

A numeração está no código

1 - Contempla a linha 1 ao 5:

- O * é um seletor universal que seleciona todos os elementos HTML na página.
Isso significa que as regras dentro deste bloco serão aplicadas a todos os elementos do documento;

- Define a margem de todos os elementos como 0;

- Define o preenchimento interno de todos os elementos como 0;

- Define o modelo de caixa CSS como border-box para todos os elementos.
Isso significa que a largura e a altura dos elementos incluirão o padding e as bordas, em vez de expandir 
o tamanho total do elemento.


O arquivo - "style.css"

1 - Contempla a linha 2 ao 12:

- Define a fonte principal como "Kanit", com fallback para "sans-serif";
- Define o peso da fonte como normal (400);
- Define o estilo da fonte como normal;
- Ajusta automaticamente o tamanho óptico da fonte para melhor legibilidade;
- Aplica o modelo Flexbox ao body para facilitar o alinhamento dos elementos;
- Centraliza o conteúdo horizontalmente dentro do body;
- Centraliza o conteúdo verticalmente dentro do body;
- Define uma altura mínima que ocupa 100% da altura da janela de visualização;
- Aplica um fundo com gradiente linear em 90 graus, do cinza claro ao azul claro.

2 - Contempla a linha 15 a 24

- Define o container com posicionamento relativo, permitindo o posicionamento de elementos filhos com base nele;
- Define a largura fixa do container como 850 pixels;
- Define a altura fixa do container como 550 pixels;
- Define o fundo do container com a cor branca;
- Arredonda as bordas do container em 30 pixels para um efeito de bordas suaves;
- Adiciona uma sombra ao redor do container com 30 pixels de difusão, usando uma sombra cinza sem offset;
- Aplica uma margem externa de 20 pixels ao redor do container;
- Esconde qualquer conteúdo que ultrapasse os limites do container, útil para elementos internos com bordas arredondadas.

3 - Contempla a linha 27 a 40

- Define a posição absoluta para que o .form-box possa ser posicionado em relação ao elemento pai com position: relative;
- Posiciona o .form-box à direita do elemento pai;
- Define a largura como 50% do elemento pai, ocupando metade da largura;
- Define a altura como 100% do elemento pai;
- Define o fundo do .form-box como branco;
- Ativa o Flexbox, facilitando o alinhamento do conteúdo dentro do .form-box;
- Centraliza verticalmente os itens dentro do .form-box;
- Define a cor do texto como cinza escuro;
- Centraliza o texto horizontalmente dentro do .form-box;
- Adiciona um preenchimento interno de 40 pixels ao redor do conteúdo;
- Define a posição de empilhamento para garantir que o .form-box fique acima de outros elementos com menor z-index;
- Aplica uma transição suave de 0,6s (com atraso de 1,2s) para as mudanças visuais, e a visibilidade é alterada com atraso de 1s, criando uma animação suave e controlada.

4 - Contempla a linha 43 a 45

- Seleciona o elemento .form-box que está dentro de um .container com a classe active.;
- Move o .form-box 50% para a esquerda do elemento pai (o .container), centralizando-o horizontalmente em relação ao pai quando a classe active está presente.

5 - Contempla a linha 48 a 50

- Seleciona o elemento .form-box que também possui a classe register;
- Oculta o .form-box.register visualmente, mas ele ainda ocupa espaço na página.

6 - Contempla a linha 53 a 55

- Seleciona o elemento .form-box.register dentro de um .container que possui a classe active;
- Torna o .form-box.register visível novamente.

7 - Contempla a linha 57 a 60

- Define a largura do form para ocupar 100% do espaço disponível no elemento pai.

8 - Contempla a linha 63 a 66

- Define o tamanho da fonte do título (h1) dentro de .container como 36 pixels;
- Define a margem superior como -10 pixels (movendo o título ligeiramente para cima) e a margem inferior como 0.

9 - Contempla a linha 69 a 72

- Define o posicionamento relativo para .input-box, permitindo o posicionamento de elementos filhos de forma ajustada em relação a este container;
- Adiciona uma margem de 30 pixels na parte superior e inferior, e 0 nas laterais.

10 - Contempla a linha 75 a 83

- Define a largura do campo de entrada (input) para ocupar 100% do espaço disponível dentro do .input-box;
- Aplica 13 pixels de padding na parte superior e inferior, 50 pixels à direita e 20 pixels à esquerda, criando um espaço confortável dentro do input;
- Define o fundo do campo de entrada com uma cor cinza claro;
- Arredonda as bordas do campo de entrada em 8 pixels para um efeito visual mais suave;
- Define o tamanho da fonte dentro do campo de entrada como 16 pixels;
- Define a cor do texto do campo de entrada como cinza escuro;
- Define o peso da fonte como médio (500), deixando o texto um pouco mais destacado.

11 - Contempla a linha 86 a 89

- Define a cor do texto do placeholder (texto de exemplo dentro do campo de entrada) como um cinza mais claro;
- Define o peso da fonte do placeholder como normal (400), deixando o texto mais sutil.

12 - Contempla a linha 92 a 99

- Define a posição absoluta para o elemento <i>, permitindo o posicionamento em relação ao elemento pai (.input-box, que deve estar com position: relative);
- Posiciona o elemento <i> a 20 pixels do lado direito do .input-box;
- Alinha verticalmente o elemento <i> no meio do .input-box;
- Ajusta o posicionamento vertical movendo o elemento <i> para cima em 50% da sua própria altura, para centralização exata;
- Define o tamanho da fonte (ou do ícone) como 20 pixels;
- Define a cor do elemento <i> como cinza claro.

13 - Contempla a linha 102 a 104

- Define uma margem com -15px na parte superior, 15px na parte inferior e 0 nas laterais.

14 - Contempla a linha 107 a 111

- Define o tamanho da fonte do link como 14.5 pixels;
- Define a cor do texto do link como cinza escuro;
- Remove a decoração padrão do link (o sublinhado).

15 - Contempla a linha 114 a 124

- Define a largura do botão para ocupar 100% do espaço disponível no elemento pai;
- Define a altura fixa do botão como 48 pixels;
- Define a cor de fundo do botão como um tom de azul;
- Arredonda as bordas do botão em 8 pixels;
- Adiciona uma sombra suave ao redor do botão, com 10 pixels de difusão e um leve tom de cinza;
- Muda o cursor para o estilo de ponteiro ao passar sobre o botão, indicando que é clicável;
- Define o tamanho da fonte do texto dentro do botão como 16 pixels;
- Define a cor do texto do botão como branca;
- Define o peso da fonte como seminegrito, destacando o texto.

16 - Contempla a linha 127 a 130

- Define o tamanho da fonte dos parágrafos (p) dentro do .container como 14.5 pixels;
- Adiciona uma margem de 15 pixels na parte superior e inferior e 0 nas laterais.

17 - Contempla a linha 133 a 136

- Ativa o modelo Flexbox para o container .social-icons, permitindo o alinhamento flexível de seus itens;
- Centraliza horizontalmente os ícones dentro do container .social-icons.

18 - Contempla a linha 139 a 148

- Define o elemento <a> como um contêiner flexível, mantendo-o em linha com outros elementos;
- Adiciona um preenchimento interno de 10 pixels ao redor do conteúdo do link;
- Adiciona uma borda sólida de 2 pixels com cor cinza claro ao redor do link;
- Arredonda as bordas do link em 8 pixels, criando um efeito de botão;
- Define o tamanho da fonte (ou ícone) dentro do link como 24 pixels;
- Define a cor do texto (ou ícone) como cinza escuro;
- Remove o sublinhado padrão do link;
- Adiciona uma margem horizontal de 8 pixels para espaçar os links entre si.

19 - Contempla a linha 151 a 155

- Define o posicionamento absoluto para .toggle-box, permitindo que ele seja posicionado em relação ao elemento pai com position: relative;
- Define a largura da .toggle-box para ocupar 100% da largura do elemento pai;
- Define a altura da .toggle-box para ocupar 100% da altura do elemento pai.

20 - Contempla a linha 158 a 168

- Cria um elemento vazio antes do conteúdo de .toggle-box, útil para efeitos visuais e estilização extra;
- Define o posicionamento absoluto para o pseudo-elemento ::before, permitindo seu posicionamento independente dentro do .toggle-box;
- Posiciona o elemento 250% à esquerda do limite da .toggle-box, provavelmente para que entre em cena durante uma transição;
- Define a largura como 300% da .toggle-box, tornando o elemento muito maior que o container;
- Define a altura como 100% da altura da .toggle-box;
- Define a cor de fundo do pseudo-elemento como um tom de azul;
- Aplica bordas arredondadas com raio de 150 pixels, criando um efeito de bordas suaves e arredondadas;
- Define o índice de empilhamento para garantir que o pseudo-elemento fique sobreposto a outros elementos;
- Aplica uma transição suave com duração de 1.8 segundos, criando um efeito de movimento gradual.

21 - Contempla a linha 171 a 173

- Seleciona o pseudo-elemento ::before de .toggle-box dentro de um .container que possui a classe active;
- Move o pseudo-elemento ::before para o centro horizontal da .toggle-box, alinhando-o a 50% da largura do container pai.

22 - Contempla a linha 176 a 187

- Define o posicionamento absoluto para .toggle-panel, permitindo posicioná-lo de forma independente dentro do elemento pai;
- Define a largura da .toggle-panel como 50% do elemento pai;
- Define a altura da .toggle-panel para ocupar 100% da altura do elemento pai;
- Define a cor do texto dentro da .toggle-panel como branco;
- Aplica o Flexbox para facilitar o alinhamento do conteúdo dentro do .toggle-panel;
- Alinha os elementos em uma coluna, empilhando-os verticalmente;
- Centraliza os itens verticalmente dentro da .toggle-panel;
- Centraliza os itens horizontalmente dentro da .toggle-panel;
- Define o índice de empilhamento para garantir que o .toggle-panel apareça acima de elementos com z-index inferior;
- Aplica uma transição suave com duração de 0.6 segundos para mudanças visuais, criando um efeito gradual.

23 - Contempla a linha 190 a 193

- Seleciona o elemento .toggle-panel que também possui a classe toggle-left;
- Posiciona a .toggle-panel.toggle-left à esquerda do elemento pai, alinhando-a com o limite esquerdo;
- Aplica um atraso de 1.2 segundos antes de iniciar a transição, permitindo que o movimento ou a animação ocorram após esse período.

24 - Contempla a linha 196 a 199

- Seleciona o elemento .toggle-panel.toggle-left dentro de um .container com a classe active;
- Move a .toggle-panel.toggle-left 50% para fora da área visível à esquerda, ocultando-a parcialmente ou totalmente;
- Aplica um atraso de 0.6 segundos antes de iniciar a transição para esse movimento, permitindo um efeito visual temporizado.

25 - Contempla a linha 202 a 205

- Seleciona o elemento .toggle-panel que também possui a classe toggle-right;
- Posiciona a .toggle-panel.toggle-right 50% para fora da área visível à direita, ocultando-a parcialmente ou totalmente fora do container;
- Aplica um atraso de 0.6 segundos antes de iniciar a transição, proporcionando um efeito de entrada ou saída temporizado.

26 - Contempla a linha 208 a 211

- Seleciona o elemento .toggle-panel.toggle-right dentro de um .container com a classe active;
- Posiciona a .toggle-panel.toggle-right alinhada ao lado direito do elemento pai, tornando-a totalmente visível;
- Aplica um atraso de 1.2 segundos antes de iniciar a transição, criando um efeito de entrada temporizado.

27 - Contempla a linha 214 a 216

- Adiciona uma margem inferior de 20 pixels aos parágrafos (p) dentro de .toggle-panel.

28 - Contempla a linha 219 a 225

- Define a largura do botão (.btn) dentro de .toggle-panel como 160 pixels;
- Define a altura do botão como 46 pixels;
- Define o fundo do botão como transparente;
- Adiciona uma borda sólida de 2 pixels de cor branca ao redor do botão;
- Remove qualquer sombra que o botão possa ter.


O arquivo - "responsive.css"

1 - Contempla a linha 2 a 5

- Cria uma media query que aplica os estilos apenas em telas com largura máxima de 650 pixels, ideal para dispositivos menores como celulares;
- Define a altura do .container como 100vh (100% da altura da janela de visualização) menos 40 pixels, para garantir algum espaço ao redor do container em dispositivos menores.

2 - Contempla a linha 8 a 12

- Posiciona o .form-box alinhado ao fundo do elemento pai;
- Define a largura do .form-box para ocupar 100% da largura do elemento pai;
- Define a altura do .form-box como 70% da altura do elemento pai.

3 - Contempla a linha 15 a 18

- Seleciona o elemento .form-box dentro de um .container que possui a classe active;
- Posiciona o .form-box alinhado à borda direita do elemento pai;
- Eleva o .form-box para que fique 30% acima da parte inferior do elemento pai, ajustando sua posição vertical.

4 - Contempla a linha 21 a 27

- Posiciona o pseudo-elemento ::before alinhado à borda esquerda do elemento pai .toggle-box;
- Move o pseudo-elemento ::before para 270% acima do topo do elemento pai, posicionando-o bem acima;
- Define a largura do pseudo-elemento como 100% do elemento pai, ocupando toda a sua largura;
- Define a altura do pseudo-elemento como 300% do elemento pai, tornando-o três vezes mais alto que o container;
- Arredonda as bordas com um raio de 20 unidades da largura da viewport (vw), criando uma forma ovalada ou circular dependendo do layout.

5 - Contempla a linha 30 a 33

- Seleciona o pseudo-elemento ::before de .toggle-box dentro de um .container que possui a classe active;
- Posiciona o pseudo-elemento ::before alinhado à borda esquerda do elemento pai;
- Move o pseudo-elemento ::before para 70% abaixo do topo do elemento pai, posicionando-o mais para baixo dentro do container.

6 - Contempla a linha  36 a 39

- Define a largura da .toggle-panel para ocupar 100% da largura do elemento pai;
- Define a altura da .toggle-panel como 30% da altura do elemento pai.

7 - Contempla a linha 42 a 44

- Seleciona o elemento .toggle-panel que também possui a classe toggle-left;
- Posiciona o .toggle-panel.toggle-left alinhado à borda superior do elemento pai.

8 - Contempla a linha 47 a 50

- Seleciona o elemento .toggle-panel.toggle-left dentro de um .container com a classe active;
- Posiciona o .toggle-panel.toggle-left alinhado à borda esquerda do elemento pai;
- Move o .toggle-panel.toggle-left 30% acima do topo do elemento pai, deslocando-o parcialmente para fora da área visível.

9 - Contempla a linha 53 a 56

- Seleciona o elemento .toggle-panel que também possui a classe toggle-right;
- Posiciona o .toggle-panel.toggle-right alinhado à borda direita do elemento pai;
- Move o .toggle-panel.toggle-right 30% para fora da área visível inferior, posicionando-o abaixo do limite do container.

10 - Contempla a linha 59 a 62

- Seleciona o elemento .toggle-panel.toggle-right dentro de um .container que possui a classe active;
- Posiciona o .toggle-panel.toggle-right alinhado à borda inferior do elemento pai, tornando-o totalmente visível na parte inferior.

11 - Contempla a linha 65 a 68

- Define uma media query que aplica os estilos apenas em telas com largura máxima de 400 pixels, adaptando o design para dispositivos com telas muito pequenas, como smartphones;
- Define o preenchimento interno (padding) da .form-box como 20 pixels em todas as direções, proporcionando um espaçamento interno menor e mais adequado para telas pequenas.

12 - Contempla a linha 71 a 73

- Seleciona os elementos <h1> dentro do .toggle-panel;
- Define o tamanho da fonte dos títulos <h1> como 30 pixels.



