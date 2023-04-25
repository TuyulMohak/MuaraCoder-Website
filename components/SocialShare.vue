<template>
    <div class="md:sticky md:top-5 text-gray-800">
        <h6 class="text-xl mb-3">Share to Social Media</h6>
        <div class="flex md:grid justify-center opacity-80 text-4xl md:text-4xl">
            <a :href="`https://www.facebook.com/share.php?u=${url}`" target="_blank">
                <button class="icon">
                    <Icon name="uil:facebook" class="text-blue-700"/>
                </button>
            </a>
            <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`" target="_blank">
                <button class="icon">
                    <Icon name="uil:linkedin" class="text-blue-600"/>
                </button>
            </a>
            <a :href="`https://www.twitter.com/share?&url=${url}&text=${message}&hashtags=web,javascript`" target="_blank">
                <button class="icon">
                    <Icon name="uil:twitter" class="text-blue-600"/>
                </button>
            </a>
            <!-- <a>
                <button @click="copyLink" class="icon">
                    <Icon name="uil:link" class="text-green-800"/>
                </button>
            </a> -->
        </div>
    </div>
</template>

<script>
export default {
    props:{ url:String, message:String },
    setup () {
        // const textToCopy = ref(props.url)
        // const copyLink = () => {
        //     navigator.clipboard.writeText(textToCopy.value);
        //     alert('copied link to cliboard: '+props.url)
        // }
        // return {copyLink}
    }
}
</script>