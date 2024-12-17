O por quê da utilização das tags no projeto: (a numeração está marcada no código HTML5).

1 - Tag Semântica para separar a página: É todo o conteúdo da página;

2 - Tag Semântica para separar a página: Introdução da página/Cabeçalho principal;

3 - Tag Semânticas para separar a página;

4 - Tag Semântica para separar a página: Introdução da sessão;

5 - Tag Semântica para separar a página: Pergunta n°1: multipla escolha;

6 - A tag "form" já vem default para indicar uma ação, mas aqui não será utilizada dessa forma. A tag "input" contém os atributos da pergunta e das respectivas opções. 
O atributo "radio" permite a escolha de apenas uma opção. O atributo "value" é para indicar que o usuário pode escolher. Tag "label" para aparecer a 
escrita/rótulo da alternativa1 e sucessivamente. Como todas as alternativas possuem o mesmo atributo "name", assim que clicar e 
selecionar uma opção a outra é desmarcada. Para ficar uma abaixo da outra, a tag "br" foi utilizada;

7 - Tag Semântica para separar a página: Pergunta n°2: texto;

8 - A tag "form" já vem default para indicar uma ação, mas aqui não será utilizada dessa forma. A tag "input" contém os atributos da pergunta e das respectivas opção. 
Aqui não será utilizado o atributo "value", pois é o usuário que terá que digitar a informação. O atributo "placeholder" serve para indicar através de um 
texto onde é o local para o usuário interagir;

9 - Tag Semântica para separar a página: Pergunta n°3: senha;

10 - É a mesma descrição da pergunta de n°2;

11 - Tag Semântica para separar a página: Pergunta n°4: data;

12 - É a mesma descrição das perguntas de n°2 e 3;

13 - Tag Semântica para separar a página: Pergunta n°5: seleção múltipla;

14 - A tag "form" já vem default para indicar uma ação, mas aqui não será utilizada dessa forma. A tag "input" contém os atributos da pergunta e das respectivas opção. 
O atributo "checkbox", permite escolher mais de uma opção. O atributo "value" é para indicar que o usuário pode escolher. Tag "label" para aparecer 
a escrita/rótulo da opção1 e sucessivamente. Como todas as alternativas possuem o mesmo atributo "name", assim que clicar e selecionar uma opção a outra 
pode ou não ser marcada e também desmarcada, por causa do "checkbox". Para ficar uma abaixo da outra, a tag "br" foi utilizada;

15 - Tag Semântica para separar a página: Pergunta n°6: upload de arquivo;

16 - A tag "form" já vem default para indicar uma ação, mas aqui não será utilizada dessa forma. A tag "input" contém os atributos da pergunta e das respectivas opção;

17 - Tag Semântica para separar a página: Pergunta n°7: menu suspenso/dropdown;

18 - A tag "form" já vem default para indicar uma ação, mas aqui não será utilizada dessa forma. Aqui ao invés da tag "input", será utilizada a tag "select". 
A tag "select", funciona como um menu suspenso, e dentro dela, serão colocadas as opções de resposta com os seus respectivos atributos. 
Por isso, a tag "option" é utilizada;

19 - Tag Semântica para separar a página: Pergunta n°8: adicionar imagem;

20 - Diferente dos anteriores, aqui será utilizado a tag "img". Para tanto é importante ter em mente que uma boa prática, é ter na pasta do projeto uma subpasta 
principal: "src" e detro dela subpastas como, por exemplo, "assets", e dentro uma subpasta "imagens" contendo os arquivos. Aqui, não irá aparecer imagem alguma 
na página, pois o src está apontando para um arquivo vazio. A tag "input" irá conter os atributos da pergunta. A tag "figure" serve para a imagem ter uma legenda, 
por isso a tag "img" fica dentro. E para utilizar a legenda, a tag "figcaption" foi escolhida;

21 - Tag Semântica para separar a página: Tabela de pontuação;

22 - Para gerar uma tabela será utilizada a tag "table", e no html5 a tabela é construída de linha para linha, por isso o uso da tag "tr". Essa tag irá conter os 
itens presentes em cada linha. Para isso é utilizado a tag "td"/table data. O atributo "border" (o valor "1" representa a expessura da borda, quanto maior mais 
grossa, por assim dizer) é para delimitar a linha e também no caso a coluna que acaba sendo gerada pelos diferentes tags "td" dentro de uma tag "tr". Observação, na 
construção de uma tabela, é necessário utilizar assim como no HTML5 a estrura (só que aqui são tags diferentes): "thead"; "tbody"; "tfoot";

23 - Aqui funciona como o cabeçalho da tabela!;

24 - Aqui funciona como o corpo da tabela!;

25 - Aqui funciona como o rodapé da tabela!;

26 - Tag Semântica para separar a página: Lista de respostas;

27 - Aqui será utilizado a tag "ul" que cria uma lista desordenada, ele não numera (já a tag "ol" é uma lista ordenada, ou seja, ela numera). Portanto, após o teste, 
foi utilizada a tag "ol". E dentro da tag, colocar a tag "li" para listar. A tag "details" funciona para "esconder" a lista (se a mesma estiver contida/filho). 
Por padrão no navegador do chrome vem escrito: Saiba mais, para mudar isso, basta colocar a tag "summary" e escrever o que deve aparecer, para o usuário clicar e 
poder ver as respostas corretas;

28 - Tag Semântica para separar a página: Formulário de feedback;

29 - A tag "form" já vem default para indicar uma ação, mas aqui não será utilizada dessa forma. A tag "input" contém os atributos para o usuário interagir. 
A tag "label" é para aparecer o nome ao lado do campo que o usuário irá interagir. A tag "textarea" possibilita uma caixa maior para armazenar os comentários, 
se fosse via tag "input" com o atributo "text", não teria espaço suficiente para escrever. O atributo "rows" é para dizer quantas linhas terá a caixa. Já o atributo 
"cols" é para dizer quantas colunas terá a caixa. A tag "fieldset" serve para envolver todos os campos dentro do formulário, criando uma nova caixa. 
Com a tag "legend" é possível colocar uma legenda no formúlário. Com a tag "button" foi criado um botão para interação. Porém aqui, a linguagem de programação 
javascript não foi integrada ao projeto. Com atributo "onclick" - "alert" é possível ter o retorno de quando clicar;

30 - Tags Semântica para separar a página. É o rodapé do site. Aqui pode conter os contatos dos desenvolvedores, termos de direito e licensas. A tag "p" vai fazer 
os parâgrafos explicativos. Uma observação, na tag "p" para utilizar caracteres especiais, é necessário colocar o símbolo: & (E comercial), pois asim através de um 
código (combinação de caracteres) o HTML5 irá entender e identificar qual o símboleo está sendo requerido. A tag "a" é para colocar um site e redirecionar através 
do clique. Ela pode ser usada, dentro da tag "p". O atributo "target" (através do:"_blank") utilizado dentro da tag "a", permite que o redirecionamento para 
outra página, faça que a página não seja fechada, abrindo em uma nova aba, ao invés de abrir "por cima".