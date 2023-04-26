<template>
    <div class="p-5 md:mx-32">
        <h1>Back-end Posts</h1>
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <PostCard v-for="row in data" :key="row._path" :data="row" :showCategory="false"/>
        </section>
    </div>
</template>

<script setup>

useSeoMeta({
    title: 'MuaraCoder: Back-end Web Development Tips and Tricks',
    ogTitle: 'MuaraCoder: Back-end Web Development Tips and Tricks',
    description: "Explore our selection of back-end web development articles and tutorials, and discover new tips, tricks, and best practices. From server-side scripting to database management, MuaraCoder has got you covered.",
    ogDescription: "Explore our selection of back-end web development articles and tutorials, and discover new tips, tricks, and best practices. From server-side scripting to database management, MuaraCoder has got you covered.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
})

const locale = useBrowserLocale()
console.log(locale)
const data = await queryContent(`/${locale}/back-end`).find()

</script>