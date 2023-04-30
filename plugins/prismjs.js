import { getHighlighter } from 'shiki'
// import Prism from 'prismjs'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            hlCode: getHighlighter
        }
    }
})
