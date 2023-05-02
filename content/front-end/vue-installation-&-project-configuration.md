---
title: 'Simple Vue 3 Guide : Installation & Project Configuration'
description: In this guide, MuaraCoder will show you how to easily install vue 3 project with vite in simple way and also with examples. 
image: /images/vue-vite-screenshot.png
author: Muhammad Rivandra
date: 2023-04-30
---

# Simple Vue 3 Guide : Installation & Project Configuration

::AuthorAndDate{author="Muhammad Rivandra" date="2023-05-01"}
::

::ImageWithAlt{src="/images/vue-vite-screenshot.png" alt="Vue App Screenshot"}
::


## Installation

In this guide I will use Vite because of it's simplicity and sheer speed. Firstly, you must already have package manager like `pnpm`, `yarn` or `npm`. I recommend using `npm`. and you also need `NODE` installed on your device. To start a `Vue` project using `Vite`. we need to run one of the command below on your terminal.


```bash
# Install using npm
npm create vite@latest

# install using yarn
yarn create vite

# install using pnpm
pnpm create vite
```

Now you need to customize the project the way you want, but make sure to pick `Vue` as the framework. After that, just move to the directory, install its dependencies, and run a local server.

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

After you run the local server, it will show the URL where the app runs. Now go to the URL using your browser. in this case our URL is `http://127.0.0.1:5175/`.

```bash

VITE v4.3.3  ready in 1683 ms

  ➜  Local:   http://127.0.0.1:5175/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

After you visit the link, you will see the simple starter app by Vue. It'll only take several seconds.

::ImageWithAlt{src="/images/vue-vite-screenshot.png" alt="Vue Project Screenshot"}
::

Great, now you've created the Vue app using Vite. 👨‍💻👨‍💻👨‍💻


## Projects Folder

This is the project folder we just created.

::ImageWithAlt{src="/images/vue-vite-directory.png" alt="Vue Project Folder"}
::


## Vue App Example

This is an example of an extremely simple Vue app to add and reduce a counter. You can see the guide in the code snippet below. The root of our app is on `src/app.vue`. So in this section, we will edit it.

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

This is the image of the app. We can click +1 to increase the counter by 1 and click -1 to reduce the counter by 1.

::ImageWithAlt{src="/images/vue-vite-example.png" alt="Vue Project Sample"}
::

## Installing Package

To install it, we can just run `npm install package_name`. Then we can just use it in our project. For some packages like `dayjs`, `uuid` we can just import them on the component.

```vue
<script setup>
import { dayjs } from 'dayjs'

<script>
```

But for some modules like `Pinia` we need to do more configuration in the `src/main.js`. The example for `Pinia` is shown below. If you are stuck or confused, you can see the guide in the package documentation to know how to install it. Don't forget to **read the documentation**.

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

Okay, so that's it. The simplest way to create a Vue project using Vite and also do some examples with it Good luck with your web development journey, and check out the other Vue guides on MuaraCoder.


## Simple Vue 3 Guide
[Simple Vue 3 Guide: What is Vue and why I love Vue](/front-end/what-is-vue-and-why-i-love-it){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Installation & Project Configuration](/front-end/vue-installation-and-project-configuration){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Single File Component, Composition API & Script Setup](/front-end/vue-sfc){class="text-green-700 underline hover:font-bold"}

<!-- [Simple Vue 3 Guide: Intro to Vue Router](/){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Deploying Free on Netlify](/){class="text-green-700 underline hover:font-bold"}
 -->
