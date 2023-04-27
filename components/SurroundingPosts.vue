<template>
    <div class="md:sticky top-5 text-gray-800">
        <h6 class="text-xl mb-3">latest Contents</h6>
        <!-- <pre>{{data}}</pre> -->
        <ul class="text-md text-green-800 underline">
            <li v-for="link in data" :key="link._path" class="hover:font-bold mb-2">
            <NuxtLink  :to="link._path">{{ link.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>


<script setup>

const props = defineProps({
    currentRoute: String
})

const data = await queryContent().only(['_path', 'title']).sort({ date: 1 }).limit(10).findSurround(props.currentRoute)
console.log("this is from surroundingPosts", data)
</script>
