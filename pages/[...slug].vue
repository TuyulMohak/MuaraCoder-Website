<template>
    <main >
      <article class="grid grid-cols-3 md:grid-cols-5 z-0">
        <aside class="col-span-3 md:col-span-1 pt-3 md:pt-32 p-5 text-center">
          <SocialShare :url="url" message="Check this post that I found" />
        </aside>
        <div class="col-span-3 p-5 mx-3"><ContentDoc/></div>
        <aside class="col-span-3 md:col-span-1 pt-3 md:pt-32 p-5 opacity-80">
          <div class="md:sticky top-5 text-gray-800">
            <h6 class="text-xl mb-3">latest Contents</h6>
            <!-- <pre>{{data}}</pre> -->
            <ul class="text-md text-green-800 underline">
              <li v-for="link in data" :key="link._path" class="hover:font-bold mb-2">
                <NuxtLink  :to="link._path">{{ link.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </aside>
      </article>
    </main>
</template>

<script >
export default {
  async setup () {
    const locale = useLocalePath()
    const route = useRoute()
    const url = "https://www.muaracoder.com"+route.fullPath
    console.log(url)
    const data = await queryContent(locale('/')).only(['_path', 'title']).sort({ date: 1 }).limit(10).find()
    return { data, url }
  }
}

</script>

<style scoped>
</style>