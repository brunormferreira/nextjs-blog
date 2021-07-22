---
title: 'When to use Javascript Reduce method?'
date: '2020-12-08'
tag: 'Development'
---

Hello everybody! I was a time without create articles, thats why i'm was studying a lot
and maintaining a react project that i'm work now, including features and each others.

Today we are here to speak about the _REDUCE METHOD_ as the title says.

The first things that we need to think is: What did we want to do with this code? Does we
go to reutilize it? Did we need to create a function to return this value? What did we need to do?

Answering some of this questions that will help us to define what we go to create, **the reduce method is available only for arrays**, so we actually think, its a array, I go to use filter.. map.. some.. find? Yeah, thats correct, so, let's think a little more deeply.

- **filter** its a good practice to use when we only want one property from the original array.
- **map** method is good choice when we want to return another new array, with the value that
  you want or something like that..
- **some** method tests if at least one of the elements in the array passes the test
  implemented by the assigned function and returns a value of true or false.
- **find** instead of some, find returns the value of the first element of the array that
  satisfies the provided test function.

Based on this reasoning, think about the reduce method:

Think, when we should need to use this method?

...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
Am I transforming an array into something other than another array? **Use .reduce** <br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />
...<br />

The idea of .reduce is that you can take an array and transform it into anything else - another array, an object, an integer, literally anything.

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

3.

Try to do this [exercise](https://gist.github.com/brunormferreira/db2a20efc9486c2959f4d07042259554) to test your skills!

---

<!-- [
  { id: 1, likes: 13, text: 'Lets code in Reactjs for all day long!' },
  { id: 2, likes: 87, text: 'Software Developer is a good choice to your life!' },
  { id: 3, likes: 51, text: 'Make your code readability.' },<br />
  { id: 4, likes: 32, text: 'Open Source Software is the best thing for the developers learn more and more.' },<br />
]
-> Remove the stars property ->
[
  { id: 1, text: 'Lets code in Reactjs for all day long!' },
  { id: 2, text: 'Software Developer is a good choice to your life!' },
  { id: 3, text: 'Make your code readability.' },
  { id: 4, text: 'Open Source Software is the best thing for the developers learn more and more.'},<br />
] -->

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

**Function Calling**</br>

sum([1, 2, 3])

The very first time the callback function runs, total will be 0 and num will be 1. Then,
the next iteration, total will be 1 and num will be 2. The reason total is one is because
we previously returned 0 + 1. Then, total will be 3 and num will be 3. Then, there are no
more elements in the array so what gets returned is 6.

---

Thanks for reading this article, now its time to practice and understand more about
this excellent js method.
