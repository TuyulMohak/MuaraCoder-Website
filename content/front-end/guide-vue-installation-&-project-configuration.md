---
title: 'Panduan Simple Vue 3 : Instalasi, dan Project Configuration'
description: In this guide, MuaraCoder will show you how to easily install vue 3 project with vite in simple way. 
image: images/vue-vite-screenshot.png
author: Muhammad Rivandra
date: 2023-04-30
---

# Simple Vue 3 Guide : Installation & Project Configuration

![my image](/images/vue-vite-screenshot.png)
**Muhammad Rivandra, 2023-04-30**

In this post i will expain about the first step of how to create an extremely simple and Vue project using vite. So the first step is to Install the project on your device


## Installation

In this guide I will use vite because of it's simplicity and sheer speed. To start a vue project using vite, we need to run one of the command below.

```bash
# Install using npm
npm create vite@latest

# install using yarn
yarn create vite

# install using pnpm
pnpm create vite

```

Now you need to customize the project the way you wanted, but make sure to pick 'vue' as the framework. after that just move to the directory, install it's dependencies and run a local server.

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

after you run the local server, it will show the local and url, now go to the url using your browser.

```bash

VITE v4.3.3  ready in 1683 ms

  ➜  Local:   http://127.0.0.1:5175/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

Now you can view the starter app using the link shown on the terminal after you run the local server.

::ImageWithAlt{src="/images/vue-vite-screenshot.png" alt="Vue Project Screenshot"}
::

Great, now you created vue app using vite.


## Projects Folder

This is the project folder that created.
::ImageWithAlt{src="/images/vue-vite-directory.png" alt="Vue Project Folder"}
::


## Vue App Example

This is the example of extremely simple vue app to add and reduce a counter. you can see the guide from the code snippet below.

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

this is the image of the app, we can click +1 to add to the counter by 1 and click -1 to reduce the counter by 1

::ImageWithAlt{src="/images/vue-vite-example.png" alt="Vue Project Sample"}
::


## Summary

Okay, so that's it. The simplest way to create a vue project using vite and also do some example with it. Good luck with your web development journey and check out the other Vue guide on muaracoder.


## Simple Vue 3 Guide
<!-- [Simple Vue 3 Guide: What is Vue and why I love Vue](/)
[Simple Vue 3 Guide: Installation & Project Configuration](/)
[Simple Vue 3 Guide: Single File Component, Composition API & Script Setup](/)
[Simple Vue 3 Guide: Intro to Vue Router](/)
[Simple Vue 3 Guide: Deploying Free on Netlify](/)
 -->
