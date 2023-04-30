<template>
    <div class="text-h">
      <!-- this is the snippet -->
      <!-- <div v-html="code">
        <div>THIS SOULD BE THE CODE</div>
      </div> -->
      <div class="border">
        
        <pre class="grid grid-cols-1 gap-0">
          <div class="m-0 bg-gray-900 flex justify-between items-center px-5 text-gray-300 h-8">
            <p class="text-left">index.js</p>
            <p class="text-end">copy</p>
          </div>
          <code class="lang-js">
    const app = createApp()
            {{ code }}
          </code>
        </pre>
      </div>
    </div>
</template>

<script setup>
// import prismjs from 'prismjs'
// import stylesheet from 'prism-themes'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const props = defineProps({
  code:String
})

onMounted(() => hljs.highlightAll())
</script>