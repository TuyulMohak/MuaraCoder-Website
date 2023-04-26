<template>
    <div class="p-5 md:mx-32">
        <h1>Front-end Posts</h1>
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <PostCard v-for="row in data" :key="row._path" :data="row" :showCategory="false"/>
        </section>
    </div>
</template>

<script setup>

useSeoMeta({
    title: 'MuaraCoder: Front-end Web Development Tips and Tricks',
    ogTitle: 'MuaraCoder: Front-end Web Development Tips and Tricks',
    description: "Browse our collection of front-end web development articles and tutorials, and stay up-to-date with the latest tips, tricks, and best practices. Whether you're a beginner or an expert, you'll find something useful on MuaraCoder.",
    ogDescription: "Browse our collection of front-end web development articles and tutorials, and stay up-to-date with the latest tips, tricks, and best practices. Whether you're a beginner or an expert, you'll find something useful on MuaraCoder.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
})

const locale = useBrowserLocale()
console.log(locale)
const data = await queryContent(`/${locale}/front-end`).find()

</script>