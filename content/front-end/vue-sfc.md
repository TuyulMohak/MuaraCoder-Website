---
title: 'Simple Vue 3 Guide : Single File Component with Script Setup'
description: In this guide, MuaraCoder will show you how to use vue single file compoent with composition API and Script Setup in simple way. 
image: /images/vue-vite-screenshot.png
author: Muhammad Rivandra
date: 2023-04-30
---

# Simple Vue 3 Guide : Single File Component with Script Setup

::AuthorAndDate{author="Muhammad Rivandra" date="2023-05-02"}
::

::ImageWithAlt{src="/images/vue-vite-screenshot.png" alt="Vue App Screenshot"}
::

Okay, in this post, I will explain the Vue single file component. In a compact way. If the application is considered a brick wall, then the single-file component is the brick or bricks. Why do I say bricks or bricks? because even the component can be made using other components.

## Structure of Single File Component

It looks exactly like a normal HTML file. The difference is the template tag; it's where the HTML tags for the component go. The usage of the script, template, and style can be seen more fully below.

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

Let's say we want to use it on another component. We need to import it and then call it on the template. Let me show you the code snippet. Below is the child component that we want to call from the parent component. I didn't use any script or style tags because we don't need them.

```vue
<!-- filename: src/components/childComponent.vue -->

<template>
  <h1>HELLO THIS IS CHILD COMPONENT</h1>
</template>

```

Okay, below is the parent component, and to import and use the child component on the parent, we just need to import it and then use it on the template.

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

Okay, so that's it. The simplest way to create and use a single file component in Vue 3 We learned how single file components work and their syntax. We also learned how to import and use the SFC on other components. Good luck with your web development journey, and check out the other Simple Vue 3 guide on MuaraCoder.


## Simple Vue 3 Guide
[Simple Vue 3 Guide: What is Vue and why I love Vue](/front-end/what-is-vue-and-why-i-love-it){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Installation & Project Configuration](/front-end/vue-installation-and-project-configuration){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Single File Component, Composition API & Script Setup](/front-end/vue-sfc){class="text-green-700 underline hover:font-bold"}

<!-- [Simple Vue 3 Guide: Intro to Vue Router](/){class="text-green-700 underline hover:font-bold"}

[Simple Vue 3 Guide: Deploying Free on Netlify](/){class="text-green-700 underline hover:font-bold"}
 -->
