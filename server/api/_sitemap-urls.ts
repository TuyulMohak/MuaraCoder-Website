export default cachedEventHandler(async () => {
  const [
    posts,
  ] = await Promise.all([
    $fetch('/api/_content'),
  ])
  console.log(posts)
  return posts.map(p => {
    return { loc: p._path, lastmod: p.date }
  })
}, {
  name: 'sitemap-dynamic-urls',
  maxAge: 60 * 10 // cache URLs for 10 minutes
})