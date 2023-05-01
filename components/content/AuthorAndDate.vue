<template>
    <div class="text-sm md:text-md text-green-700 italic font-bold flex justify-center">
        <p>By {{author}}, {{date}}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    author:String,
    date:String
})

</script>