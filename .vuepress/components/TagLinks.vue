<!-- .vuepress/components/TagLinks.vue -->
<template lang="html">
  <div>
    Tags:

    <span v-for="tag in $page.frontmatter.tags"
      :key="tag" :style="{ borderRadius: '100px', border: '1px solid #3eaf7c', padding: '0.25rem 0.75rem', marginRight: '0.5rem' }">
      <router-link
        :to="{ path: `/tags.html#${tag}`}">
        {{tag}}
      </router-link>
    </span>
  </div>
</template>