---
title: 'Tutorial Vue 3 Simple : Instalasi & Project Configuration'
description: Di panduan ini, MuaraCoder akan menunjukkan cara menginstall Vue 3 menggunakan Vite dengan cara yang sangat mudah dan juga disertai contoh. 
image.src: '/images/vue-vite-screenshot.png'
author: Muhammad Rivandra
date: 2023-04-30
---

# Tutorial Vue 3 Simple : Instalasi & Project Configuration

::AuthorAndDate{author="Muhammad Rivandra" date="2023-05-01"}
::

::ImageWithAlt{src="/images/vue-vite-screenshot.png" alt="Vue App Screenshot"}
::


## Installation

Di tutorial ini kita akan menggunakan Vite karna sangat sederhana dan sangat cepat.
Sebelum itu kamu harus sudah punya package manager seperty `NPM`, `yarn`, atau `pnpm`. Saya rekomendasiin untuk pake `npm`. Kamu juga harus punya `NODE` di device kamu. Untuk membuat project menggunakan `Vue` dan `Vite` kita harus menjalankan satu dari 3 command dibawah ini di terminal.


```bash
# Install using npm
npm create vite@latest

# install using yarn
yarn create vite

# install using pnpm
pnpm create vite
```

Sekarang kita akan customize nama project, framework yang digunakan, dan varian bahasa. pastikan framework yang digunakan `Vue` dan variant `Javascript`. Setelah itu kita harus pindah ke folder project yang sudah kita buat, menginstall dependencies dan menjalankan local server. Untuk detail tahap ini bisa dilihat di bawah.

```bash
# Now customize your project
√ Project name: ... my-new-application
√ Select a framework: » Vue
√ Select a variant: » JavaScript

Scaffolding project in your-directory\my-new-application...

# Move to the project folder
cd my-new-application

# Installing the dependencies (you can see it on 'package.json')
npm install

# run local server 
npm run dev
```

Setelah kita run local servernya. Kita akan mendapatkan URL dimana project kita sedang berjalan. Untuk tutorial kali ini URL nya adalah:  `http://127.0.0.1:5175/`. nah kita perlu pergi ke URL tersebut menggunakan Browser kalian.

```bash

VITE v4.3.3  ready in 1683 ms

  ➜  Local:   http://127.0.0.1:5175/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

Setelah kamu mengunjungi link tersebut, kamu akan melihat starter project Vue + Vite. Ini Loadingnya sangat sebentar kok.

::ImageWithAlt{src="/images/vue-vite-screenshot.png" alt="Vue Project Screenshot"}
::

Mantap, sekarang kita sudah bikin Vue app menggunakan Vite. 👨‍💻👨‍💻👨‍💻


## Projects Folder

Berikut merupakan folder project yang baru kita buat.

::ImageWithAlt{src="/images/vue-vite-directory.png" alt="Vue Project Folder"}
::


## Vue App Example

Berikut merupakan contoh aplikasi yang sangat sederhana, hanya berfungsi untuk menampilkan variabel menggunakan `h1` dan menambah dan mengurangi variabel tersebut menggunakan `button`. Nah kita dimana mengeditnya?, karna root aplikasi kita itu di `src/app.vue`, maka kita akan memodifikasi file tersebut.

```vue
// src/app.vue

<script setup>
import { ref } from 'vue'

// create variable counter using 'ref'
const counter = ref(0)

// create function to add +1 to the counter variable 
const addCounter = () => {
  counter.value += 1
}

// create function to add -1 to the counter variable
const reduceCounter = () => {
  counter.value -= 1
}

</script>

<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="addCounter" >+ 1</button>
    <button @click="reduceCounter" >- 1</button>
  </div>
</template>


```

Berikut merupakan preview aplikasi yang kita buat, kita bisa klik `+1` untuk menambah 1 ke variabel dan klik `-1` untuk mengurangi satu dari variabel.

::ImageWithAlt{src="/images/vue-vite-example.png" alt="Vue Project Sample"}
::

## Installing Package

Kita pasti akan menggunakan package saat membuat web application. Untuk menginstallnya kita perlu bisa run command `npm install package_name`. Selanjutnya, kita bisa menggunakannya di project. Untuk beberapa package seperti `dayjs` dan `uuid` kita bisa import langsung di komponen seperti ini.

```vue
<script setup>
import { dayjs } from 'dayjs'

<script>
```
Tapi untuk beberapa package seperti `Pinia` kita perlu melakukan beberapa konfigurasi tambahan di `src/main.js`. Di bawah merupakan cara konfigurasi `Pinia` di `src/main.js`. Kalau misalnya bingung, kita bisa baca dokumentasi package tersebut. Di sana pasti udah lengkap perintah penggunaan package tersebut. Don't forget to **read the documentation**.

```javascript
//src/main.js

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')

```

## Summary

Okay, Tutorial kita udah siap untuk membuat Vue 3 Project menggunakan Vite dan kita juga melihat beberapa contoh aplikasi. Good luck untuk belajar web developmentnya. Check out guides tentang Vue 3 lain di MuaraCoder.

## Simple Vue 3 Guide

[Tutorial Vue 3 Sederhana: Apa itu Vuejs dan Review](/id/front-end/what-is-vue-and-why-i-love-it){class="text-green-700 underline hover:font-bold"}

[Tutorial Vue 3 Simple : Instalasi & Project Configuration](/id/front-end/vue-installation-and-project-configuration){class="text-green-700 underline hover:font-bold"}

[Tutorial Vue 3 Simple : Single File Component dengan Script Setup](/id/front-end/vue-sfc){class="text-green-700 underline hover:font-bold"}


<!-- [Simple Vue 3 Guide: Intro to Vue Router](/){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Deploying Free on Netlify](/){class="text-green-700 underline hover:font-bold"}
 -->
