// 按需加载 判断是否导入该模块内容，如果有则直接获取单独组件，而不是直接加载整个模块
import { Button } from 'element-ui'

// 只有调用了 才会真正意义上的去加载上面的包，否则不加载
Button()