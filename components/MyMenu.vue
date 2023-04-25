<template>
    <nav class="text-gray-700 pb-3">
        <ul v-if="type== 'h'" class="flex gap-x-6">
            <li v-for="menu in menus" :key="menu.id" class="header-menu">
                <NuxtLink :to="localePath(menu.uri)" class="active:underline">
                    {{menu.name}}
                </NuxtLink>
            </li>
        </ul>
        <ul v-if="type== 'v'" class="grid">
            <li v-for="menu in menus" :key="menu.id" class="text-md p-3">
                <NuxtLink :to="localePath(menu.uri)" @click="$emit('closeDrawer')" class="text-md active:underline">
                    {{menu.name}}
                </NuxtLink>
            </li>
        </ul>

    </nav>
</template>

<script setup>
const props = defineProps({
    type: String
})

const menus= [
    {
        uri:'/',
        name:'Home'
    },
    {
        uri:'/front-end',
        name:'Front-end'
    },
    {
        uri:'/back-end',
        name:'Back-end'
    },
    {
        uri:'/others',
        name:'Others'
    },
    {
        uri:'/about',
        name:'🦔About Me'
    },
    {
        uri:'/contact',
        name:'📞Contact'
    }
]
const localePath = useLocalePath()

</script>
