<template>
    <div class="grid justify-center grid-cols-1">
        <img class="w-full col-span-1 border rounded-md border-gray-500" :src="src" :alt="alt"/>
        <p class="col-span-1 text-center italic">image: {{alt}}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    src:String,
    alt:String
})

</script>