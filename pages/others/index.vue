<template>
    <div class="p-5 md:mx-32">
        <h1>Other IT Topics</h1>
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <PostCard v-for="row in data" :key="row._path" :data="row" :showCategory="false"/>
        </section>
    </div>
</template>

<script setup>

useSeoMeta({
    title: 'MuaraCoder: Other IT Tips and Tricks for Tech Enthusiasts',
    ogTitle: 'MuaraCoder: Other IT Tips and Tricks for Tech Enthusiasts',
    description: "Check out our diverse collection of IT articles and tutorials, and learn new tips, tricks, and best practices across various technologies and domains. From software development to networking, MuaraCoder has something for everyone.",
    ogDescription: "Check out our diverse collection of IT articles and tutorials, and learn new tips, tricks, and best practices across various technologies and domains. From software development to networking, MuaraCoder has something for everyone.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
})

const locale = useLocalePath()
const data = await queryContent(locale(`/others`)).find()
console.log(locale('/others'))

const i18nHead = useLocaleHead({
    addSeoAttributes: {
    canonicalQueries: ['foo']
    }
})
useHead({
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
})

</script>