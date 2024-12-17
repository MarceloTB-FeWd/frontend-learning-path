## A numeração está no código

**1 - Contempla a linha 2 a 4:**

- Define a chave da API para autenticação nas requisições;
- Seleciona o botão de busca no DOM;
- Seleciona o campo de entrada onde o usuário digita a cidade.

**2 - Contempla a linha 7 a 12:**

- Adiciona um evento de clique no botão para chamar a função buscarClima;
- Verifica se a tecla "Enter" foi pressionada;
- Chama a função buscarClima ao pressionar "Enter".

**3 - Contempla a linha 15 a 25:**

- Obtém o valor digitado pelo usuário no campo de busca;
- Interrompe a função se o campo estiver vazio;
- Chama a função para buscar dados de clima e espera o resultado;
- Verifica se os dados foram retornados com sucesso;
- Preenche os dados na tela usando a função correspondente.

**4 - Contempla a linha 28 a 38:**

- Monta a URL da API com a chave e o nome da cidade;
- Faz a requisição para a API e espera a resposta;
- Retorna se a resposta não for bem-sucedida (status diferente de 200);
- Converte a resposta para JSON;
- Retorna os dados obtidos.

**5 - Contempla a linha 41 a 54:**

- Arredonda a temperatura atual para um número inteiro;
- Obtém o valor de umidade;
- Obtém a condição climática (ex: "Ensolarado");
- Obtém a velocidade do vento em km/h;
- Obtém o ícone representando a condição climática;
- Atualiza os elementos HTML com os dados de clima.