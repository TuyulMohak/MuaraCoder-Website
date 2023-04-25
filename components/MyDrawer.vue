<template>
    <div>
        <button @click="isOpen = !isOpen" class="relative">
            <Icon class="text-5xl text-right text-gray-900" name="material-symbols:menu" />
        </button>
        <div v-show="isOpen" class="fixed z-40 grid grid-cols-4 top-0 left-0 w-screen h-screen">
            <div class="static col-span-3 bg-white">
                <div class="h-5 bg-green-500"></div>
                <div class="flex justify-between items-center p-6">
                    <p class="font-bold">Menu</p>
                    <button @click="isOpen = !isOpen"><Icon class="text-4xl " name="material-symbols:close" /></button>
                </div>
                <div>
                    <MyMenu class="px-6" type="v" @closeDrawer="isOpen =!isOpen"/>
                </div>
            </div>
            <div @click="isOpen = !isOpen" class="col-span-1 bg-black bg-opacity-10">
            
            </div>
        </div>
    </div>
</template>

<script setup>

let isOpen = ref(false)

</script>

<style lang="scss" scoped>

</style>