// rollup.config.js

import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json'; // 处理json文件的导入，在导入时会tree-shaking 不需要的内容会删除
import { terser } from 'rollup-plugin-terser'; // 代码压缩

export default {
    input: 'src/main.js',
    output: [
        {
            file: 'bundle-cjs.js',
            format: 'cjs',
            exports: 'auto',
            plugins: [terser()], // 针对输出的插件
            // dir: 'dist'
        },
        {
            file: './dist/bundle-umd.js',
            format: 'umd',
            exports: 'auto',
            name: 'myBundle'
        },
        {
            file: './dist/bundle-iife.js',
            format: 'iife',
            exports: 'auto',
            name: 'myBundle'
        },
        {
            file: './dist/bundle-es.js',
            format: 'es',
            exports: 'auto',
            name: 'myBundle'
        },
    ],
    // 使用babel编译js
    // 使用@rollup/plugin-json处理json文件的导入
    plugins: [babel({ babelHelpers: 'bundled' }), json()]
};