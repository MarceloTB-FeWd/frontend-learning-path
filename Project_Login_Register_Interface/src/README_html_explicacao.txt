Observações adquiridas com os estudos

Notei com o decorrer dos estudos que no VS Code existem diferentes maneiras de se escrever um código, porém todas elas chegam no mesmo resultado, por exemplo:

pode digitar a tag "div" da seguinte forma:

<div></div>
div (e utilizar o enter para completar) - essa é a opção mais prática mesmo.

Agora, caso dentro da tag "div" seja colocado uma "class", ao invés de escrever a tag "div" dar um enter e depois colocar a "class", é possível fazer da seguinte maneira:

.(nome que será colocado na "class"), isso já gera a seguinte estrutura:
<div class="nome que será utilizado"></div>, ou seja, mais prático ainda.

A numeração está no código

1 - Contempla da linha 29 até 61:

- A tag <div> funciona como um contêiner genérico para agrupar elementos sem importância semântica específica.
Servindo para organizar o layout da página. Aqui tem uma <div> principal (por assim dizer), com a "class="container"",
englobando todos os outros elementos:
  Parte do: Login 
- A segunda <div> na hierarquia (por assim dizer), possui a "class="form-box login" que representa a área de Login da página.
  Dentro dela, foi utilizada a tag <form> para envolver todos os elementos do formulário, organizando o conjunto de campos e definindo como e para onde os dados serão enviados.
  A tag <h1> representa o cabeçalho principal;
  A tag <div> com a "class="input-box" vai conter o primeiro "input";
  A tag <input> primeiro local de interação do usuário, aqui é do tipo "texto" e com um "placeholder" ambos como "required";
  A tag <i> foi utilizada igual indicado pelo boxicons, já que aqui tem um ícone;
  A tag <div> com a "class="input-box" vai conter o segundo "input";
  A tag <input> segundo local de interação do usuário, aqui é do tipo "senha" e com um "placeholder" ambos como "required";
  A tag <div> com a "class="forgot-link" vai conter um link de direcionamento;
  A tag <a> vai representar esse link de direcionamento com a descrição;
  A tag <button> é o botão para o usuário interagir na página, aqui é o de "Login"
  A tag <p> representa o parágrafo descrevendo o que virá logo abaixo;
  A tag <div> com a "class="social-icons" vai conter os links de direcionamento para as redes sociais compilados do Boxicons;
  A tag <a> é para o link do google, a tag <i> é o ícone do google, também tem para facebook, linkedin e github;
 
2 - Contempla da linha 63 a 96:

- Funciona como a mesma <div> só que possui a "class="form-box register" que representa a área de Cadastro da página.
  Dentro dela, foi utilizada a tag <form> para envolver todos os elementos do formulário, organizando o conjunto de campos e definindo como e para onde os dados serão enviados.
  Parte do: Cadastro
- Aqui é a mesma estrutura do "Login", o que muda são as nomenclaturas.


3 - Contempla da linha 98 a 111:

- A terceira <div> na hierarquia (por assim dizer), possui a "class="toggle-box" funciona como um painel para o usuário poder realizar o cadastro ou para entrar novamente.
  Dentro dela, foram utilizadas outras duas tag <div>;
  A tag <div> com a "class="toggle-panel toggle-left", representa o painel da esquerda para indicar que aqui o usuário pode realizar o seu cadastro;
  A tag <h1> representa o cabeçalho principal;
  A tag <p> representa o parágrafo que contém uma frase explicativa;
  A tag <button> é o botão para o usuário interagir na página, aqui é o de "Cadastrar";
  A tag <div> com a "class="toggle-panel toggle-right", representa o painel da direita para indicar que aqui o usuário pode realizar o seu login;
  A tag <h1> representa o cabeçalho principal;
  A tag <p> representa o parágrafo que contém uma frase explicativa;
  A tag <button> é o botão para o usuário interagir na página, aqui é o de "Login".

