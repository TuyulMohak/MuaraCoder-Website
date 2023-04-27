<template>
    <main class="p-5 md:mx-64 text-center text-gray-700">
        <h1>Contact</h1>
        <div class="grid grid-cols-1 gap-5">
            <section class="col-span-1 border rounded-lg">
                <h2>{{ $t("address")}}</h2>
                <p><strong>{{ $t("location")}}</strong> : Jambi City, Indonesia</p>
                <p><strong>Email</strong>    : <a class="underline hover:text-green-600" href="mailto:rivandra0@gmail.com">rivandra0@gmail.com</a></p>
            </section>
            <section class="col-span-1 border rounded-lg">
                <h2> {{$t("cta-contact")}}</h2>
                <MySocialMedia/>
            </section>
        </div>
    </main>
</template>

<script setup>

const { locale } = useI18n()

const metaObjectEn = {
    title: "Contact: Get in Touch with Muhammad Rivandra and MuaraCoder",
    ogTitle: 'Contact: Get in Touch with Muhammad Rivandra and MuaraCoder',
    description: "Have a question or suggestion? Want to collaborate? Don't hesitate to contact me using the form below. I'm always happy to chat with fellow web developers and enthusiasts.",
    ogDescription: "Have a question or suggestion? Want to collaborate? Don't hesitate to contact me using the form below. I'm always happy to chat with fellow web developers and enthusiasts.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River'
}
const metaObjectId = {
    title: "Contact: Hubungi Muhammad Rivandra dan MuaraCoder",
    ogTitle: 'Contact: Hubungi Muhammad Rivandra dan MuaraCoder',
    description: "Memiliki pertanyaan atau saran? atau ingin bekerja sama? Jangan ragu untuk menghubungi saya melalui sosial media yang ada di halaman ini.",
    ogDescription: "Memiliki pertanyaan atau saran? atau ingin bekerja sama? Jangan ragu untuk menghubungi saya melalui sosial media yang ada di halaman ini.",
    ogImage: '/images/Logo_complete_MuaraCoder.png',
    twitterCard: 'MuaraCoder: Where Web Development Flows like a River'
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
    canonicalQueries: ['contact web developer from Jambi, indonesia']
    }
})
useHead({
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
})

</script>