---
title: 'Duas formas de pré-renderização'
date: '2020-01-01'
tag: 'Desenvolvimento'
---

Next.js tem duas formas de pré-renderização: ** Geração estática ** e ** Renderização do lado do servidor **. A diferença está em ** quando ** gera o HTML para uma página.

- ** Geração estática ** é o método de pré-renderização que gera o HTML no ** tempo de compilação **. O HTML pré-renderizado é então _reutilizado_ em cada solicitação.
- ** Renderização do lado do servidor ** é o método de pré-renderização que gera o HTML em ** cada solicitação **.

É importante ressaltar que Next.js permite que você ** escolha ** qual formulário de pré-renderização usar para cada página. Você pode criar um aplicativo Next.js "híbrido" usando a geração estática para a maioria das páginas e a renderização do lado do servidor para outras.
