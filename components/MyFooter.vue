<template>
    <footer class="border w-screen">
        <div class="flex justify-start items-start">
            <div class="m-4">
                <div class="text-xl font-bold"><NuxtLink to="/">Muhammad Rivandra</NuxtLink></div>
                <div class="text-md"><a href="mailto:rivandra0@gmail.com">rivandra0@gmail.com</a></div>
            </div>
        </div>
        <div class="mx-4">
            <MyMenu type='v'/>
        </div>
        <MySocialMedia/>
        <div class="text-center text-gray-700 bg-gray-100"> <a href="/privacy-policy">Privacy Policy</a>  2023 @ Muhammad Rivandra</div>
    </footer>
</template>

<script>

const menus= [
    {
        uri:'/front-end',
        name:'Front-end'
    },
    {
        uri:'/back-end',
        name:'Back-end'
    },
    {
        uri:'/user-experience',
        name:'User Experience'
    }
]

export default {
    setup () {
        

        return { menus }
    }
}
</script>

<style lang="scss" scoped>

</style>