var path = require("path")
const CopyWebpackPlugin = require('copy-webpack-plugin')

var DIST_DIR = path.resolve(__dirname, "dist")
var SRC_DIR = path.resolve(__dirname, "src")

var config = {
    entry: SRC_DIR + "/app/index.js",
    mode: "development",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["react", "es2015", "stage-2"]
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    { 
                        loader: "url-loader",
                        options: {
                            limit: 100000
                        }
                    },
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    { loader: "file-loader" },
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    { 
                        loader: "url?limit=10000&mimetype=application/font-woff"
                    }
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    { 
                        loader: "url?limit=10000&mimetype=application/octet-stream"
                    }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    { loader: "file" },
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    { 
                        loader: "url?limit=10000&mimetype=image/svg+xml"
                    }
                ]
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([ 
            { from: 'src\\index.html', to: 'dist\\index.html' }
         ])
    ],
    resolve: {
        extensions: [".jsx", ".js"]
    },
}

module.exports = config