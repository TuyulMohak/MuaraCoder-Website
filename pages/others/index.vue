<template>
    <div class="p-5 md:mx-32">
        <h1> {{ $t("others-title") }} </h1>
        <section class="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <PostCard v-for="row in data" :key="row._path" :data="row" :showCategory="false"/>
        </section>
    </div>
</template>

<script setup>
const { locale } = useI18n()

const metaObjectEn = {
    title: 'MuaraCoder: Information Techonology Tips and Tricks',
    ogTitle: 'MuaraCoder: Information Techonology Tips and Tricks',
    description: "Explore our selection of back-end development articles and tutorials, and discover new tips, tricks, and best practices. MuaraCoder has got you covered.",
    ogDescription: "Explore our selection of back-end development articles and tutorials, and discover new tips, tricks, and best practices. From server-side scripting to database management, MuaraCoder has got you covered.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}
const metaObjectId = {
    title: 'MuaraCoder: Informasi dan tutorial Teknologi Informasi',
    ogTitle: 'MuaraCoder: Informasi dan tutorial Teknologi Informasi',
    description: "Temukan beragam artikel dan tutorial terkait Teknologi Informasi terbaru hanya di MuaraCoder. Yuk, eksplorasi pengetahuanmu bersama MuaraCoder!",
    ogDescription: "Temukan beragam artikel dan tutorial terkait Teknologi Informasi terbaru hanya di MuaraCoder. Yuk, eksplorasi pengetahuanmu bersama MuaraCoder!",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}

let metaData = null
let canons = null
if(locale.value === "id"){
    metaData = metaObjectId
    canons = ['up-to-date informations on Information Techonology']
}else {
    metaData = metaObjectEn
    canons = ['Informasi up-to-date Terkait Teknologi Informasi']
}
useSeoMeta(metaData)

const localePath = useLocalePath()
const data = await queryContent(localePath(`/others`)).find()
// console.log(locale('/others'))

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