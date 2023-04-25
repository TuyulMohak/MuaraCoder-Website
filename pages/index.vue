<template>
    <div class="p-5 md:mx-32">
        <h1>All Posts</h1>
        <!-- <pre>{{ data }}</pre> -->
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <PostCard v-for="row in data" :key="row._path" :data="row" :showCategory="true"/>
        </section>
    </div>
</template>

<script setup>

useSeoMeta({
    title: 'MuaraCoder: Where Web Development Flows like a River',
    ogTitle: 'MuaraCoder: Where Web Development Flows like a River',
    description: 'Stay on top of the latest in web development with MuaraCoder. Our expert team brings you up-to-date insights and practical tips on front-end and back-end development, including Vue.js, React, and more.',
    ogDescription: 'Stay on top of the latest in web development with MuaraCoder. Our expert team brings you up-to-date insights and practical tips on front-end and back-end development, including Vue.js, React, and more',
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
    keywords: 'front-end, back-end, information technology, vue, nuxt, react, database, bahasa indonesia, english, vue component, react component, nuxt component'
})
const locale = useLocalePath()
const data = await queryContent(locale('/')).sort({date: 1}).find()

</script>
