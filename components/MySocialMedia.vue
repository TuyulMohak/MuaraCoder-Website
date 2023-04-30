<template>
    <div class="flex justify-center p-3">
        <a v-for="social in socials" :key="social.href" :href="social.href">
            <button class="icon">
                <Icon :name="social.iconName" :class="social.btnClass "/>
            </button>
        </a>
    </div>
</template>

<script setup>
const socials = [
    {
        iconName: 'uil:github',
        href: 'https://github.com/TuyulMohak',
        btnClass: 'text-black text-4xl'
    },
    {
        iconName: 'uil:linkedin',
        href: 'https://www.linkedin.com/in/muhammad-rivandra-ie-frontend/',
        btnClass: 'text-blue-600 text-4xl'
    },
    {
        iconName: 'uil:instagram',
        href: 'https://www.instagram.com/rivandram/?hl=en',
        btnClass: 'text-red-600 text-4xl'
    }
]
</script>
