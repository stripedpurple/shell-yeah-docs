module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'assets/'
            }
        }
    },
    title: 'Shell Yeah',
    description: 'Documenting some of my favorite shell tips, trick, and tools',
    themeConfig: {
        nav: [{
            text: 'Tags',
            link: '/tags'
        }, ],
        sidebar: [
            '/',
            // '/zsh',
            // '/bash',
            '/cli-tools/'
        ]
    }
}