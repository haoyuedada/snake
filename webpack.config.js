/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-03-20 16:56:16
 */
const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry:"./src/index.ts",
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"bundle.js",
    //告知webpack不适用箭头
    environment:{
      arrowFunction:false,
      const:false
    }
  },
  resolve:{
    extensions:[".ts",".js"]
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:[
          {
            loader:"babel-loader",
            options:{
              presets:[
                [
                  "@babel/preset-env",
                  {
                    targets:{
                      "chrome":"58",
                      "ie":"11"
                    },
                    "corejs":"3",
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude:/node_modules/
      },
      //设置less文件的处理
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browers:'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template:"./src/index.html"
    })
  ]
}