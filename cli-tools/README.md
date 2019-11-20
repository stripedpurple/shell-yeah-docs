# CLI Tools

As a software engineer, system administrator, or command line enthusiest you know that your shell enviroment contains many useful common tools. However, your shell can do everything by itself. This section is a curated collection of my favorite cli tools.

## Tool List

<ul>
    <li v-for="tool in $site.pages.filter(x => x.path.match(/\/cli-tools\/.*\.html/))"><a :href="tool.path">{{ tool.title }}</a></li>
</ul>

<!-- <script>
    export defaults = {
        data() {
            tools: $page
        }
    }
</script> -->