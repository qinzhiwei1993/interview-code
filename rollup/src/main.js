// import foo from './foo.js';

import packageJson from '../package.json'

console.log(packageJson)

// const a = new Promise()

class B {
    constructor(name) {
        this.name = name
    }

    run() {
        console.log(this.name)
    }
}

const b = new B('haha')
b.run()

export default function () {
    console.log(foo);
}


// 动态导入，代码分割
// export default function () {
//     import('./foo.js').then(({ default: foo }) => console.log(foo));
// }