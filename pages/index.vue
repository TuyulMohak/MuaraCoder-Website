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

const { locale } = useI18n()

const metaObjectEn = {
    title: 'MuaraCoder: Where Web Development Flows like a River',
    ogTitle: 'MuaraCoder: Where Web Development Flows like a River',
    description: 'Stay on top of the latest in web development with MuaraCoder. MuaraCoder team brings you up-to-date insights and practical tips on front-end and back-end development, including Vue.js, React, and more.',
    ogDescription: 'Stay on top of the latest in web development with MuaraCoder. Our expert team brings you up-to-date insights and practical tips on front-end and back-end development, including Vue.js, React, and more',
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}
const metaObjectId = {
    title: 'MuaraCoder: Informasi Terbaru tentang IT dan Web Development',
    ogTitle: 'MuaraCoder: Informasi Terbaru tentang IT dan Web Development',
    description: 'Jangan lewatkan berita terbaru seputar pengembangan web bersama MuaraCoder. Kami menyediakan tips dan wawasan terkini mengenai pengembangan front-end dan back-end, termasuk teknologi seperti Vue.js, React, dan lainnya yang pasti sangat berguna untukmu.',
    ogDescription: 'Jangan lewatkan berita terbaru seputar pengembangan web bersama MuaraCoder. Kami menyediakan tips dan wawasan terkini mengenai pengembangan front-end dan back-end, termasuk teknologi seperti Vue.js, React, dan lainnya yang pasti sangat berguna untukmu.',
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}

let metaData = null
let canons = null
if(locale.value === "id"){
    metaData = metaObjectId
    canons = ['up-to-date informations on web development', 'up-to-date informations on information technology']
}else {
    metaData = metaObjectEn
    canons = ['Informasi up-to-date Terkait web Development', 'Informasi up-to-date Terkait teknologi informasi']
}
useSeoMeta(metaData)

const localePath = useLocalePath()
let data = null
if(locale.value == 'id'){
    data = await queryContent(localePath('/')).sort({date: 1}).find()
}else{
    data = await queryContent(localePath('/')).where({_path: {$not:{$contains: '/id/'}}}).sort({date: 1}).find()
}

const i18nHead = useLocaleHead({
    addSeoAttributes: {
    canonicalQueries: canons
    }
})
useHead({
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
})

</script>
