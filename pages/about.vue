<template>
    <main class="p-5 md:mx-64 text-center text-gray-700">
        <section>
            <img class="w-32" src="/images/muhammad_rivandra_potrait.png"/>
        </section>
        <section>
            <h1>About Me</h1>
            <h2>{{  $t("about-tagline") }}</h2>
            <p class="text-md italic mb-5">{{$t("about-desc-00")}} <a class="text-green-600 underline" href="https://muhammad-rivandra.netlify.app/#/" target="_blank">Muhammad Rivandra</a>, {{$t("about-desc-0")}}</p>
            <div class="text-sm">
                <p>{{$t("about-desc-1")}}</p>
                <p>{{$t("about-desc-2")}}</p>
            </div>
        </section>
    </main>
</template>

<script setup>

const { locale } = useI18n()
const metaObjectEn = {
    title: "About: Muhammad Rivandra and MuaraCoder",
    ogTitle: "About: Muhammad Rivandra and MuaraCoder",
    description: "Hi, I'm Muhammad Rivandra, a web developer and founder of MuaraCoder. Learn more about my journey and discover how MuaraCoder can help you improve your web development skills and stay ahead of the game.",
    ogDescription: "Hi, I'm Muhammad Rivandra, a web developer and founder of MuaraCoder. Learn more about my journey and discover how MuaraCoder can help you improve your web development skills and stay ahead of the game.",
    ogImage: "/images/Logo_complete_MuaraCoder.png",
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}
const metaObjectId = {
    title: "About: Muhammad Rivandra dan MuaraCoder",
    ogTitle: "About: Muhammad Rivandra dan MuaraCoder",
    description: "Halo, Saya Muhammad Rivandra, web developer dan founder MuaraCoder. Pelajari lebih lanjut tentang  MuaraCoder dan mengetahui orang dibalik MuaraCoder",
    ogDescription: "Halo, Saya Muhammad Rivandra, web developer dan founder MuaraCoder. Pelajari lebih lanjut tentang  MuaraCoder dan mengetahui orang dibalik MuaraCoder",
    ogImage: "/images/Logo_complete_MuaraCoder.png",
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River',
}

let metaData = null
if(locale.value === "id"){
    metaData = metaObjectId
}else {
    metaData = metaObjectEn
}
useSeoMeta(metaData)

const i18nHead = useLocaleHead({
    addSeoAttributes: {
    canonicalQueries: ['platform to share up-to-date information from IT', 'platform to share up-to-date information related to web development']
    }
})
useHead({
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
})

</script>
