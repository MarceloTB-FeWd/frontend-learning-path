## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README_js_explicacao.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_js_explicacao_en.md)

---

# Resumo da Lógica de Programação no Script

## Descrição

Este script implementa a interatividade de uma seção de Perguntas Frequentes (FAQ). Ele utiliza **JavaScript** para lidar com as interações do usuário, permitindo que os usuários alternem a exibição das respostas ao clicar nas perguntas. Aqui está uma explicação da lógica:

### 1. Selecionando os Itens de FAQ
- O script seleciona todos os elementos com a classe `.faq-items` usando `document.querySelectorAll`.
- Ele percorre cada item na lista usando o método `forEach`.

### 2. Selecionando Sub-elementos Dentro de Cada Item de FAQ
- Dentro de cada `.faq-items`, ele identifica:
  - `.faq-question`: O elemento clicável da pergunta.
  - `.faq-answer`: O elemento de resposta que será alternado.
  - `.icon`: O ícone "+" ou "-" que indica o estado.

### 3. Lidando com Eventos de Clique
- Um `addEventListener` é adicionado a cada `.faq-question` para escutar eventos de `click`.

### 4. Resetando o Estado de Todos os Itens
- Antes de alternar o item clicado, o script garante que todas as outras perguntas sejam resetadas:
  - Remove a classe `active` de todas as perguntas.
  - Define a propriedade `display` de todas as respostas como `none` (esconde elas).
  - Reseta todos os ícones para "+" (estado colapsado).

### 5. Alternando o Item Clicado
- Se a pergunta clicada **não estiver ativa**, ela:
  - Adiciona a classe `active` à pergunta clicada.
  - Define a propriedade `display` da resposta correspondente como `block` (mostra ela).
  - Altera o texto do ícone para "-" (estado expandido).

### 6. Fluxo da Lógica
- O uso de condicionais (`if (!isActive)`) garante que apenas uma pergunta permaneça expandida por vez, melhorando a experiência do usuário.

---

## Principais Pontos

1. **Gerenciamento Dinâmico de Classes:** As classes são adicionadas e removidas dinamicamente para controlar os estilos e o estado.
2. **Seleção Eficiente de Elementos:** Consultar e manipular apenas os elementos relevantes dentro de cada item de FAQ evita efeitos colaterais globais.
3. **Lógica Centralizada de Reset:** Garante que apenas um item de FAQ esteja expandido em um determinado momento.

---