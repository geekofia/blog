---
title:  "How To Swap Two Numbers in C using Pointers"
author: chankruze
date:   2019-06-01 23:30:33 +0530
categories: [Programming, HowTo]
tags: [C]
thumbnail: /assets/images/thumbnails/swap_by_reference.png
desc: "C function to swap two numbers"
---
Well we can swap the values of 2 variables in C by using a temporary variable.

The idea is simple,

- Assign a to any temporary variable : temp = a
- Assign b to a : a = b
- Assign temp to b : b = temp

You can also ask the user to input the value sfor the variables, but for the shake of simplicity i commented it out.


```bash
Input : x = 10, y = 20
Output : x = 20, y = 10
```

<script src="https://gist.github.com/chankruze/4bdaa12bdf75bc1f67fcd8dbc9ccf7f8.js"></script>

That's it, Thanks for reading.