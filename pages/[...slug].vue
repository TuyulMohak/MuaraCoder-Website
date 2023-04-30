<template>
    <main >
      <article class="grid grid-cols-3 md:grid-cols-5 z-0">
        <aside class="col-span-3 md:col-span-1 pt-3 md:pt-32 p-5 text-center">
          <SocialShare :url="url" message="Check this post that I found" />
        </aside>
        <div class="col-span-3 p-5 mx-3">
          <ContentDoc>
            <template #not-found>
              <PageNotFound/>
            </template>
          </ContentDoc>
        </div>
        <aside class="col-span-3 md:col-span-1 pt-3 md:pt-32 p-5 opacity-80">
          <SurroundingPosts :currentRoute="$route.fullPath"/>
        </aside>
      </article>
    </main>
</template>

<script setup>

    const locale = useLocalePath()
    const route = useRoute()
    const url = "https://www.muaracoder.com"+route.fullPath
    console.log(url)
    const data = await queryContent(locale('/')).only(['_path', 'title']).sort({ date: 1 }).limit(10).find()

    const i18nHead = useLocaleHead({
      addSeoAttributes: {
        canonicalQueries: ['foo']
      }
    })
    useHead({
      link: [...(i18nHead.value.link || [])],
      meta: [...(i18nHead.value.meta || [])]
    })
</script>

<style scoped >

</style>