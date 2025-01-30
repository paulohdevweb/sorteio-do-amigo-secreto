# Projeto: Amigo Secreto

Este é um projeto simples de **Amigo Secreto** desenvolvido em HTML, CSS e JavaScript. Ele permite que os usuários adicionem nomes de participantes, realizem o sorteio e vejam os resultados diretamente no navegador. Além disso, os dados são persistidos usando o `localStorage`, garantindo que os nomes não sejam perdidos ao atualizar a página.

---

## Funcionalidades

1. **Adicionar Participantes**:
   - Insira os nomes dos participantes no campo de texto e clique em "Adicionar".
   - Os nomes são exibidos em uma lista abaixo.

2. **Sortear Amigo Secreto**:
   - Clique em "Sortear amigo" para realizar o sorteio.
   - O resultado é exibido em uma lista, mostrando quem cada pessoa tirou.

3. **Limpar Lista**:
   - Clique em "Limpar lista" para remover todos os participantes e resultados.

4. **Persistência de Dados**:
   - Os nomes dos participantes são salvos no `localStorage` do navegador, garantindo que eles permaneçam mesmo após atualizar a página.

---

## Como Funciona

### Lógica do Projeto

O projeto é dividido em três partes principais:

1. **HTML**:
   - Estrutura da página, incluindo o formulário para adicionar nomes, a lista de participantes e os botões para sortear e limpar a lista.

2. **CSS**:
   - Estilização da página, com cores, fontes e layout responsivo.

3. **JavaScript**:
   - Lógica do amigo secreto, incluindo:
     - Adição de nomes à lista.
     - Sorteio dos participantes.
     - Persistência dos dados usando `localStorage`.

### Detalhes da Implementação

#### Adicionar Participantes
- O nome digitado no campo de texto é adicionado a um array (`participantes`).
- O array é salvo no `localStorage` para persistência.
- A lista de participantes é atualizada na tela em tempo real.

#### Sortear Amigo Secreto
- O array de participantes é embaralhado usando `sort(() => Math.random() - 0.5)`.
- Cada pessoa recebe o próximo nome na lista embaralhada como seu amigo secreto.
- O resultado é exibido na tela.

#### Limpar Lista
- O array de participantes é esvaziado.
- O `localStorage` é limpo.
- A lista de participantes e o resultado são atualizados na tela.

---

## Como Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
