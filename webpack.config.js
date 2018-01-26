const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//自动生成HTML不用手动去配置
const webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")//提取css-->是生成一整个css文件以下是做了拆分
const ExtractRootCss = new ExtractTextPlugin({filename:'styles/root.css',allChunks:false});//生成多文件css
const ExtractVueCss = new ExtractTextPlugin({filename:'styles/[name]/style.css',allChunks:true});//不要忘记去plugin去引入单独的css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//最新的uglifyJS

const env = process.env.NODE_ENV
//获取工程的版本号
const version = process.env.npm_package_version

module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/[name].js"
    },
    devServer:{
        contentBase:"./dist"//本地服务器环境，热替换的前提
    },
    devtool: '#eval-source-map',
    module:{
       rules:[
           {
               test:/\.js$/, //用正则匹配文件，用require或者import引入的都会匹配到
               loader:"babel-loader", //加载器名，就是上一步安装的loader
               exclude:/node_modules/ //排除node_modules目录，我们不加载node模块中的js哦~
           },
           {
               test:/\.css$/,
               //这里用的ExtractRootCss
                use:ExtractRootCss.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                    // 'postcss-loader'
                })
               //依次使用以上loader加载css文件，postcss-loader可以暂时不加，后面再深入修改webpack配置的时候再说用处
               //也可以写成这样 loader："style-loader!css-loader!postcss-loader"
           },
           {
               test:/\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
               loader:'url-loader',
               options:{
                   limit:10000,
                   name:'img/[name].[ext]?[hash]'
               }
               //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
               //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存。
           },
           {
               test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
               loader:"url-loader",
               options:{
                   limit:10000,
                   name:'fonts/[name].[ext]?[hash]'
               }
               //和上面一致
           },
           {
               test:/\.less$/,
               //这里用的ExtractRootCss
               use:ExtractRootCss.extract({
                   fallback:'style-loader',
                   use:[
                       'css-loader',
                       'less-loader'
                   ]
               })
           },
           {
               test:/\.vue$/,
               loader:'vue-loader',
               //这一个loader当然是vue项目必须的加载器啦，不加其他规则的话，
               //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
               options:{
                    loaders:{
                       //这里用的ExtractVueCss
                      'css': ExtractVueCss.extract({//提取css
                        use: 'css-loader',
                        fallback: 'vue-style-loader' // <- 这是vue-loader的依赖//首先给vue的样式loader过滤一遍
                        //vue内部的style需要先抽取出来，所以要在fallback属性上添加预先的加载器 'vue-style-loader'
                      }),
                      //这里用的ExtractVueCss
                      //用了less或者sass的地方都要用上哦
                      'less': ExtractVueCss.extract({//lang属性对应的名称
                          use:[
                              'css-loader',//css-loader,把css转js
                              'less-loader'//用less编译
                          ],
                          fallback:'vue-style-loader'
                      })
                    }
                }
           },
       ]
   },
   resolve:{
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        //缩写扩展
        alias:{
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$':'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            '@': path.resolve(__dirname,'./src'),
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            title:'vue demo',
            template:'./index.html',
        }),
        ExtractRootCss,//填入插件实例，复用的css
        ExtractVueCss,//记得按顺序填入，vue内的css
        new webpack.HotModuleReplacementPlugin(),//热替换
        //new ExtractTextPlugin("styles/style.css"),//大包成一整个大的css了 不需要现在分开vue和外部引入的两块样式
    ],
    externals:{
        'jquery':'window.jQuery'//一般用在cdn加速里，然后在app.vue引入import $ from 'jquery'就可以啦
    }
}

//生成生产代码的时候才触发
if (process.env.NODE_ENV === 'production') {
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({//设置全局常量的插件，要记住!赋值的时候记得写成'"production"'or JSON.stringify('production')。
            'process.env': {
            NODE_ENV: '"production"'
            }
        }),
        //抽取从node_modules引入的模块，如vue
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            minChunks:function(module,count){
                var sPath = module.resource;
                // console.log(sPath,count);
                //匹配 node_modules文件目录
                return sPath &&
                    /\.js$/.test(sPath) &&
                    sPath.indexOf(
                        path.join(__dirname, 'node_modules')
                    ) === 0
            }
        }),
        new UglifyJsPlugin({//压缩代码
          uglifyOptions: {
            compress: {
              warnings: false
            }
          },
          sourceMap: true
        })
    ])
    module.exports.devtool = '#source-map'
}
