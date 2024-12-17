## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](./README_js_explicacao.md)  
[![English](https://img.shields.io/badge/-English-blue)](./README_js_explanation.md)

## Explicação para a lógica utilizada

### Os números estão no (script.js)

#### 1 - Seleção da Bola
Seleciona o elemento HTML com o id igual a 'ball' e o armazena na constante ball. Permitindo que o JavaScript manipule a bola para animação.

#### 2 - Seleção do Contêiner
Seleciona o primeiro elemento no DOM que possui a classe 'animation-container' e o armazena na constante 'container'. Este contêiner define os limites onde a bola se moverá.

#### 3 - Variáveis de Posição e Velocidade
- 'posX' e 'posY' são inicializados em 0 para definir a posição inicial da bola no contêiner;
- 'velocityX' e 'velocityY' são definidas como 2 e 3, respectivamente, determinando a velocidade de movimento da bola nas direções: horizontal (X) e vertical (Y).

#### 4 - Função de Animação
- Define a função 'animationBall' que será responsável por atualizar a posição da bola;
- Incrementa 'posX' e 'posY' com 'velocityX' e 'velocityY', respectivamente, movendo a bola na direção especificada.

#### 5 - Verificação de toque Horizontal e Inversão da Velocidade
- Verifica se a bola atingiu a borda direita '(posX + largura da bola >= largura do contêiner)' ou a borda esquerda '(posX <= 0)' do contêiner;
- Se a condição for verdadeira, inverte a direção horizontal da bola multiplicando 'velocityX' por -1, fazendo a bola "rebater" na borda.

#### 6 - Verificação de toque Vertical e Inversão da Velocidade
- Verifica se a bola atingiu a borda inferior '(posY + altura da bola >= altura do contêiner)' ou a borda superior '(posY <= 0)' do contêiner;
- Se a condição for verdadeira, inverte a direção vertical da bola multiplicando 'velocityY' por -1, fazendo a bola "rebater" na borda.

#### 7 - Atualização da posição da bola e 
Atualiza a posição da bola no DOM usando a propriedade CSS 'transform' com 'translate', movendo a bola para '(posX, posY)' em pixels.

#### 8 - Agendamento do próximo quadro 
Solicita que a função 'animationBall' seja chamada antes do próximo repintar da tela, criando um loop de animação contínuo.

#### 9 - Inicialização da Animação
Chama a função animationBall pela primeira vez para iniciar o loop de animação da bola.

### Criação manual do Modal

#### 1
Seleciona os links que abrem os modais.

##### 1.1
Seleciona os modais.

##### 1.2
Seleciona os botões de fechar os modais.

#### 2
Função para abrir o modal.

##### 2.1
Função para fechar o modal.

#### 3
Eventos para abrir os modais. Quando um estiver aberto fecha outro modal automaticamente.

#### 4
Eventos para fechar os modais.

#### 5
Fecha o modal se clicar fora do conteúdo (backdrop). 