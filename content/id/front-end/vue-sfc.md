---
title: 'Tutorial Vue 3 Simple : Single File Component + Script Setup'
description: Pada Tutorial ini, MuaraCoder akan menunjukkan cara untuk membuat dan menggunakan Single file component pada Vuejs dengan menggunakan script setup secara sederhana. 
image.src: '/images/vue-vite-screenshot.png'
author: Muhammad Rivandra
date: 2023-04-30
---

# Tutorial Vue 3 Simple : Single File Component dengan Script Setup

::AuthorAndDate{author="Muhammad Rivandra" date="2023-05-02"}
::

::ImageWithAlt{src="/images/vue-vite-screenshot.png" alt="Vue App Screenshot"}
::

Okay di tutorial ini, Muaracoder akan menjelaskan tentang Vue Single File Component (SFC). Kalau misalnya aplikasi kita diibaratkan tembok, maka SFC ini adalah batu bata, atau sekumpulan batu bata. Kenapa bisa sekumpulan batu bata, karena satu komponen bisa juga dibikin dari sekumpulan komponen lain.

## Structure of Single File Component

Bentuknya mirip kek HTML biasa. Perbedaannya di template tag; itu merupakan tempat dimana semua HTML tags untuk komponen itu diletakkan. Perbedaan satu lagi yaitu penggunaan `script setup`; ini memudahkan kita dan menyederhanakan penggunaan `script` karna syntax nya lebih sederhana dari `composition api` dan `option api`. Untuk mengetahui penggunaan `composition api` dan `option api` bisa kamu lihat di `vue 3 documentation`. Penggunaan style, script dan template bisa dilihat di bawah. 

```vue
<!-- filename: src/components/myComponent.vue -->

<script setup>
const name = 'Muhammad Rivandra'

const alertName = () => {
  alert(name)
}

</script>

<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <!-- we need to wrap the javascript code inside {{ var }} -->
    <button @click="alertName" ></button>
  </div>
  <!-- we can just use the variable or function declared on the script -->
</template>

<style scoped> 
h1{
  color: blue
}
/* now the h1 tag on the template will be colored blue */
/* make sure use 'scoped'. if not, the css will be able to be accessed on every other components*/
</style>
```

## Using SFC on other SFC

Okay, jadi kita mau menggunakan sebuah komponen di komponen lain. Kita perlu import komponen tersebut dan panggil di template, Seperti ini. 

```vue
<!-- filename: src/components/childComponent.vue -->

<template>
  <h1>HELLO THIS IS CHILD COMPONENT</h1>
</template>

```

Kita tidak menggunakan style dan script tag karna kita memang tidak pakai. Nah, kita cuma perlu import dan memanggil komponen tersebut di dalam template.

```vue
<!-- filename: src/components/parentComponent.vue -->

<script setup>
//firstly we need to import it to this component
import myComponent from 'src/components/childComponent' //make sure the location of the component file is right 

</script>

<template>
<!-- then just call it -->
  <MyComponent/>
</template>

```


## Summary

Okay, Jadi. Itu merupakan Tutorial simple untuk membuat dan menggunakan Single File Component di Vue 3. Kita Sudah belajar bagaimana SFC bekerja dan syntax nya juga. Kita juga belajar gimana caranya import SFC di komponen lain. Good luck untuk belajar web developmentnya. Check out guides tentang Vue 3 lain di MuaraCoder.


## Simple Vue 3 Guide

[Tutorial Vue 3 Sederhana: Apa itu Vuejs dan Review](/id/front-end/what-is-vue-and-why-i-love-it){class="text-green-700 underline hover:font-bold"}

[Tutorial Vue 3 Simple : Instalasi & Project Configuration](/id/front-end/vue-installation-and-project-configuration){class="text-green-700 underline hover:font-bold"}

[Tutorial Vue 3 Simple : Single File Component dengan Script Setup](/id/front-end/vue-sfc){class="text-green-700 underline hover:font-bold"}

<!-- [Simple Vue 3 Guide: Intro to Vue Router](/){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Deploying Free on Netlify](/){class="text-green-700 underline hover:font-bold"}
 -->
