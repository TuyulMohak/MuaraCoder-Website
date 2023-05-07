<template>
    <header class="border-b-4 px-4">
        <div class="flex justify-between items-center">
            <div class="text-xl md:text-3xl font-mono font-bold text-green-900 w-44">
                <!-- <NuxtLink to="/">Muara<span class="font-extrabold">Coder</span></NuxtLink> -->
                <NuxtLink to="/"><img src="/images/Logo_MuaraCoder.png" alt="logo-muaracoder"></NuxtLink>
            </div>
            
            <div class="text-right">
                <div class="text-md text-right text-green-900 px-3 pt-2"> 
                    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="flex justify-end items-center">
                        <Icon name="material-symbols:language"/>Switch to {{locale.name}}
                    </NuxtLink>
                </div>
                <div class="hidden md:inline"><MyMenu type="h"/></div>
                <div class=" md:hidden" ><MyDrawer/></div>
            </div>
        </div>
    </header>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})

</script>

