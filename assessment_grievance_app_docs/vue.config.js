module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Assessment Grievance App Docs'
                return args
            })
    }
}
