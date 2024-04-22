const path = require("path")
const  htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    entry: './src/index.js', 
    output: {
        filename: 'main.js', 
        path : path.resolve(__dirname , 'dist')
    }, 
    plugins: [
        new htmlWebpackPlugin( {
            template : './src/index.html'
        })
    ] , 
    module : {
        rules: [
            {
            test: /\.scss$/, 
            use : [ "style-loader" , "css-loader" , "sass-loader"]
            } , 
            {
                test: /\.(jpg|png|svg)$/,
                type : 'asset/resource'
            }
        ]
    },
    // resolve: {
    //     fallback: {
    //         "util": require.resolve("util/"),
    //         "crypto": require.resolve("crypto-browserify"),
    //         "path": require.resolve("path-browserify"), 
    //         "zlib" : false
    //     }
    // }

}