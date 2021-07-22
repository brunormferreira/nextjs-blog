---
title: 'Quando usar o método Reduce no Javascript?'
date: '2020-12-08'
tag: 'Development'
---

Olá pessoal! Fiquei um tempo sem criar artigos, por isso estou estudando muito
e manter um projeto de reação que estou trabalhando agora, incluindo recursos e uns dos outros.

Hoje estamos aqui para falar sobre o _MÉTODO DE REDUÇÃO_ como diz o título.

A primeira coisa que precisamos pensar é: O que queremos fazer com este código? Nós
vai reutilizá-lo? Precisamos criar uma função para retornar esse valor? O que precisamos fazer?

Respondendo a algumas dessas perguntas que nos ajudarão a definir o que vamos criar, **o método de redução está disponível apenas para arrays**, então realmente pensamos, é um array, vou usar filter... map... some... find? Sim, correto, então vamos pensar um pouco mais profundamente.

- **filter** é uma boa prática usar quando queremos apenas uma propriedade do array original.
- o método **map** é uma boa escolha quando queremos retornar outra nova matriz, com o valor que você quer ou algo parecido.
- **some** método testa se pelo menos um dos elementos da matriz passa no teste
  implementado pela função atribuída e retorna um valor verdadeiro ou falso.
- **find** em vez de alguns, find retorna o valor do primeiro elemento da matriz que
  satisfaz a função de teste fornecida.

Com base neste raciocínio, pense sobre o método de redução:

Pense, quando devemos usar este método?

... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
Estou transformando um array em algo diferente de outro array? **Use .reduce** <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />
... <br />

A ideia de .reduce é que você pode pegar um array e transformá-lo em qualquer outra coisa - outro array, um objeto, um inteiro, literalmente qualquer coisa.

---

See the examples:

1.

```js
[
  { name: 'Bruno', age: 24 },
  { name: 'Marcelly', age: 29 },
  { name: 'Igor', age: 18 }
] -> Just the names -> ['Bruno', 'Marcelly', 'Igor']
```

---

2.

```js
[
  { player: 'p0w3r', age: 28 },
  { player: 'Mafioso', age: 26 },
  { player: 'br0c4full', age: 30 },
  { player: 'NavigatoR', age: 16 },
] -> Length and age count -> { players: 4, ageTotal: 100}
```

---

3

Tente fazer este [exercício](https://gist.github.com/brunormferreira/db2a20efc9486c2959f4d07042259554) para testar suas habilidades!

---

**Function Assigment**</br>

```js
function sum(arr) {
  return arr.reduce((total, num) => {
    return total + num
  }, 0)
}
```

**Reduce Iteration**</br>

Initial Value: 0

First iteration:</br>
total: 0</br>
num: 1

Second iteration:</br>
total: 1</br>
num: 2

Third iteration:</br>
total: 3</br>
num: 3

**Chamada de função** </br>

soma([1, 2, 3])

Na primeira vez que a função de retorno de chamada for executada, o total será 0 e num será 1. Então,
na próxima iteração, o total será 1 e o número será 2. A razão do total ser um é porque
retornamos anteriormente 0 + 1. Então, o total será 3 e num será 3. Então, não há
mais elementos na matriz, então o que é retornado é 6.

---

Obrigado por ler este artigo, agora é hora de praticar e entender mais sobre
este excelente método js.
