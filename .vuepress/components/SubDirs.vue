<!-- .vuepress/components/TagList.vue -->
<template lang="html">
  <div>
      <ul>
        <li v-for="page in pages">
          <router-link
            :to="{ path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$site.pages.filter( x => x.path.includes(this.$page.path) && x.path.includes('html'))
    }
  }
}
</script>