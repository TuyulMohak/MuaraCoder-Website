<template>
    <div class="p-5 md:mx-32">
        <h1>{{ $t('home-title') }}</h1>
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
})

const locale = useLocalePath()
const data = await queryContent(locale('/')).sort({date: 1}).find()

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
