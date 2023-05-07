<template>
    <div class="border p-2 hover:bg-gray-100">
        <NuxtLink v-if="showCategory" class="text-green-700 hover:underline py-2" :to="linkUrl">{{linkName}}</NuxtLink>
        <!-- <h6>{{ $route.params.slug }}</h6> -->
        <img :src="data.image.src">
        <h6 class="font-bold text-2xl py-2 my-2 text-gray-800">
            <NuxtLink class="text-green-700 hover:underline" :to="data._path">{{ data.title }}</NuxtLink>
        </h6>
        <div class="text-sm my-2">{{ data.author }}, {{ Date(data.date) }} </div>
        <p>{{ data.description }}</p>
    </div>
</template>

<script>
export default {
    props:{ 
        data:Object,
        showCategory:Boolean
    },
    setup (props) {
        const path = props.data._path
        let linkUrl = null
        let linkName = null

        const { locale } = useI18n()
        if(locale.value === 'id'){
            linkUrl = path.split('/').slice(1,3).join('/')
            linkName = path.split('/').slice(2,3).join('/')
            // linkName = path
        }else {
            linkUrl = path.split('/').slice(1,2).join('/')
            linkName = path.split('/').slice(1,2).join('/')
            // linkName = path
        }


        return { linkUrl, linkName }
    }
}
</script>

<style lang="scss" scoped>

</style>