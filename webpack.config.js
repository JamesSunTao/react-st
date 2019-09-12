const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动创建html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//清除多余文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 代码分割
const devMode = process.argv.indexOf('production') === -1;

console.log('mode:'+devMode)
module.exports = {
    // mode:'production',
    devtool: 'cheap-module-eval-source-map',// 用于开发调试，方便清楚是那个文件出错 (共有7种)
       // 开启一个虚拟服务器
    devServer: {
        contentBase: './build',
        port: 8081,
        inline: true,
        hot: true
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js', // 输出的文件名
        path: path.resolve(__dirname, 'dist') // 
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [               
                devMode?'style-loader':MiniCssExtractPlugin.loader,                   
                {
                loader:  'css-loader',
                options: {
                    importLoaders: 2 //在一个 css 中引入了另一个 css，也会执行之前两个 loader，即 postcss-loader 和 sass-loader
                }
                },
                'postcss-loader',
                'sass-loader'
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    performance: {
        hints: false, // 关闭性能提示
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name][hash:6].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id][hash:6].css',
        }),
        new CleanWebpackPlugin(),//每次编译都会把dist下的文件清除，我们可以在合适的时候打开这行代码，例如我们打包的时候，开发过程中这段代码关闭比较好
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html', //使用一个模板
            minify: {
                // 压缩 HTML 文件
                removeComments: true, // 移除 HTML 中的注释
                // collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联 css
              },
        
        })
    ]
};
