<template>
    <div>
        <h1>404: Content Not Found</h1>
        <div class="grid text-center">
            <p>Unfortunately, The Content you Looking for is not exist, Check my other content</p>
            <div class="underline hover:text-green-500">
                <NuxtLink to="/">Go To Home</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
throw createError({statusCode: 404, statusMessage: 'page not found'})
</script>
