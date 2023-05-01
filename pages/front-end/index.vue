<template>
    <div class="p-5 md:mx-32">
        <h1>{{$t("frontend-title")}}</h1>
        <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            <PostCard v-for="row in data" :key="row._path" :data="row" :showCategory="false"/>
        </section>
    </div>
</template>

<script setup>

const { locale } = useI18n()

const metaObjectEn = {
    title: 'MuaraCoder: front-end Development Tips and Tricks',
    ogTitle: 'MuaraCoder: front-end Web Development Tips and Tricks',
    description: "Explore our selection of front-end development articles and tutorials, and discover new tips, tricks, and best practices. MuaraCoder has got you covered.",
    ogDescription: "Explore our selection of front-end development articles and tutorials, and discover new tips, tricks, and best practices. From server-side scripting to database management, MuaraCoder has got you covered.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}
const metaObjectId = {
    title: 'MuaraCoder: Informasi dan tutorial front-end Development',
    ogTitle: 'MuaraCoder: Informasi dan tutorial front-end Development',
    description: "Temukan beragam artikel dan tutorial terkait pengembangan web front-end terbaru hanya di MuaraCoder. Dapatkan tips, trik, dan best practices untuk pengembangan web yang pasti sangat bermanfaat untukmu. Yuk, eksplorasi pengetahuanmu bersama MuaraCoder!",
    ogDescription: "Temukan beragam artikel dan tutorial terkait pengembangan web front-end terbaru hanya di MuaraCoder. Dapatkan tips, trik, dan best practices untuk pengembangan web yang pasti sangat bermanfaat untukmu. Yuk, eksplorasi pengetahuanmu bersama MuaraCoder!",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}

let metaData = null
let canons = null
if(locale.value === "id"){
    metaData = metaObjectId
    canons = ['up-to-date informations on front-end development']
}else {
    metaData = metaObjectEn
    canons = ['Informasi up-to-date Terkait front-end Development']
}
useSeoMeta(metaData)


const localePath = useLocalePath()
const data = await queryContent(localePath(`/front-end`)).find()
// console.log(localePath('/front-end'))

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