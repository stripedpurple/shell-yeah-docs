<!-- .vuepress/components/TagList.vue -->
<template lang="html">
  <div>
      <router-link
        v-for="tag in tags" 
        :style="{ borderRadius: '100px', border: '1px solid #3eaf7c', padding: '0.25rem 0.75rem', margin: '0.5rem 0.5rem 0 0', display: 'inline-block' }"
        :to="{ path: `/tags.html#${tag}`}"
      >{{ tag }}</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = []
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          if (!tags.includes(tag)) {
            tags.push(tag)
          }
        }
      }
      return tags
    }
  }
}
</script>