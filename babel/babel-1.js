const babel = require('@babel/core')
const fs = require('fs')
const filePath = './source-4.js'
const sourceCode = fs.readFileSync(filePath, 'utf-8')


const config = {
    targets: "last 2 versions, not dead",
    assumptions: {
        "noDocumentAll": true,
        "noClassCalls": true
    },
    ast: true,
    presets: [
        ['@babel/preset-env', {
            useBuiltIns: 'usage',
            corejs: 3
        }]
    ],
    // plugins: ['./custom-plugin-1.js']
    plugins: ["@babel/plugin-transform-runtime", ["./babel-component-plugin", {
        libraryName: 'element-ui'
    }]]
}

babel.transformFile(filePath, config, function (err, result) {
    console.log('========= babel transformed result =======')
    console.log(result.code)
});

const parsedAst = babel.parseSync(sourceCode, {
    parserOpts: { allowReturnOutsideFunction: true },
});

console.log('============= ast ============')
console.log(parsedAst)

babel.transformFromAst(parsedAst, sourceCode, config, function (err, result) {
    const { code, map, ast } = result;
    console.log('======== 生成转换后代码 ========')
    console.log(result.code)
    fs.writeFileSync('./output/source-4.js', result.code)
});