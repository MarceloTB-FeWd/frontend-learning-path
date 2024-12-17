Nos estudos até agora de CSS3, percibi que a integração ao arquivo ".html", pode ser realizada de três maneiras:

1 - O CSS3 é utilizado em linha (in-line), com isso, o que for adicionado no estilo do site, iniciará por esse comando
(Primeiro na Hierarquia). Um comando in-line seria assim, pro exemplo:

<h1>Título Principal da página!</h1>

Dentro da tag "h1" acrescentar o atributo "style":

<h1 style="color: blue;">Título Principal da página!</h1>

E para cada nova propriedade, separar por ";". Isso pode ser utilizado para todas as tags que estiverem no arquivo ".html".

2 - O CSS3 pode ser utilizado no <head></head> da seguinte maneira:

Aqui utiliza a tag: <style></style> e dentro dela acrescente>

<style>
    h1 {
      color: blue; 
       }
</style>

Irá realizar a mesma modificação da opção anterior. Só que na hierarquia virá em segundo lugar. Por exemplo,
se aqui está em azul e no comando em linha estiver em amarelo, então a cor amarelo irá prevalecer.
Basta realizar o mesmo procedimento para todas as tags que estão presentes no arquivo ".html".


3 - O jeito correto (boas práticas de programação) é utilizar a tag: 

<link rel="stylesheet" href="style.css">

Aqui sim, será necessário a criação de um arquivo ".css" que fará todas às alterações necessárias
na parte da estilização da página (no arquivo ".html"). Para isso, o arquivo tem que estar dentro
de uma pasta "src", nomeado como css, e contendo arquivos como, por exemplo: "reset.css", "estilos.css" e "responsivo.css".
Esses fazem parte das boas práticas de programação e construção dos sites.


Explicações do arquivo: "reset.css" (Está numerado no código)

1 - Aqui é para resetar o que vem padrão no navegador. Utiliza o seletor "*", pois já faz para o 
documento inteiro. O "border-box" é para conseguir modificar tanto a altura quanto a largura dos 
elementos de uma vez. E ele não acrescenta a margem, mas sim o "padding".


Explicações do arquivo: "estilos.css" (Está numerado no código)

1 - É o inicio da estilização, após ter realizado o reset que vem de forma padrão nos navegadores. 
Iniciando pela tag "body". As cores do fundo da página e das letras estão no padrão exadecimal. 
A fonte foi importada e colocada de acordo com a descrição no google fonts;

2 - Colocar a unidade de medida "rem", significa que ela é uma unidade relativa, ou seja, 
irá se adequar ao tipo de tela que o usuário estiver e também ao tamanho da fonte que ele escolher;

3 - Agora a tag "main" virou o seletor no css3, tudo que modificar aqui, será válido para todos os 
elementos que compõem. Aqui será utilizado o "flexbox", pois facilita no alinhamento de todos os 
itens com mais precisão. Para utilizá-lo, tem que colocar: "display: flex" (habilitar o flexbox no 
container). Por padrão essa função coloca todos os elementos na horizontal (lado-a-lado). 
O segundo comando, tira do padrão e coloca a disposição em colunas;

4 - Aqui será a estilização para cada tag "section" que se encontra dentro da tag "main". 
Aqui será utilizado o "flexbox", pois facilita no alinhamento de todos os itens com mais precisão. 
Para utilizá-lo, tem que colocar: "display: flex" (habilitar o flexbox no container). 
Por padrão essa função coloca todos os elementos na horizontal (lado-a-lado). O segundo comando, 
tira do padrão e coloca a disposição em colunas;

5 - Aqui será a estilização para cada tag "h2", contida na tag "section" que está contida na tag "main";

6 - Aqui os "input" realacionados a seleção das perguntas, serão alterados. Para não gerar discordância 
com os outros "input", será utilizado "[]", pois assim o elemento ("input") será estilizado pelo seu 
atributo ("[atributo]"). O "accent-color" irá mudar a cor do botão na hora que ocorre a seleção. 
Também será modificado o botão para a questão de múltipla escolha: "checbox". Portanto para selecionar 
dois atributos diferentes usa a "," e escreve tudo do seletor novamente;

7 - Aqui serão estilizados os elementos "text", "password", "date" e "email";

8 - Aqui será estilizado um pseudo elemento que é o "placeholder". Para tanto o mesmo deve vir após "::";

9 - Aqui será estilizado a tag "select";

10 - Aqui será estilizada a tag "img". No caso desse exemplo, não irá aparecer, pois não existe imagem, 
mas assim que colocar uma imagem ela irá estar de acordo com a estilização indicada;

11 - Aqui será estilizada a tabela. De acordo com a ordem colocada no arquivo ".html";

12 - Aqui será o "th" da tabela;

13 - Aqui será o "td" da tabela;

14 - Aqui será apenas o "td" que está dentro da tag "tfoot". Para isso, utiliza a tag principal primeiro: "tfoot" (espaço) "td". Pois o (espaço) vai dizer que irá utilizar o "td" apenas que estiver contido na tag "tfoot"/descendente, pois não é um filho direto. 
Já que existe uma tag "tr" entre eles;

15 - Aqui será estilizada a tag "details";

16 - Aqui será estilizada a tag "summary";

17 - Aqui será estilizada a tag "ol";

18 - Aqui será estilizado os itens da lista, no caso cada linha - a tag "li". Assim como na explicação 14, 
o mesmo processo foi aplicado aqui;

19 - Aqui será estilizado a tag "fieldset";

20 - Aqui será estilizada a tag "legend";

21 - Aqui será estilizada a tag "textarea";

22 - Aqui será estilizada a tag "button";

23 - Aqui será estilizado a tag "footer";

24 - Aqui será estilizada a tag "footer". Vai ser utilizada a classe gerada no arquivo ".html", 
para que não modifique a estilização dos outros parágrafos presentes na página. Também poderia ser 
igual foi feito na descrição de número 14. Porém, assim é possível aprender uma novo forma que é muito 
utilizada. Agora, o seletor é a classe que foi criada. Para o CSS3 entender que de fato é uma classe, 
utiliza o "." antes do nome. O interessante é que mais de um elemento pode ter a mesma classe. 
Se caso fosse um "id" ao invés, teria que utilizar o "#" antes, e também só poderia ser utilizado uma 
vez. Já que uma boa prática é aplicar apenas um "id" para um elemento se diferenciar;

25 - Aqui será estilizado a tag "a". O mecanismo será como na descrição de número 14.

Explicações do arquivo: "responsivo.css" (Está numerado no código)

1 - Media query para telas de até 750px;

2 - Ajuste de padding e centralização do texto no corpo. E Reduz o tamanho da fonte para telas menores;

3 - Centralização e redução de padding no header;

4 - Ajuste no main para manter os elementos alinhados e responsivos;

5 - Redução de espaçamento entre seções e ajuste flex;

6 - Ajuste de título para ser mais visível em telas pequenas;

7 - Ajuste no tamanho dos campos de input;

8 - Ajuste do tamanho do select;

9 - Imagem menor e centralizada;

10 - Ajuste de padding e fonte para tabela;

11 - Espaçamento reduzido na listagem;

12 - Botão com fonte e espaçamento ajustado;

13 - Footer com padding menor;

14 - Ajustes flexíveis adicionais com a criação da class: "container-flex". E exibe os itens na 
vertical em telas menores.