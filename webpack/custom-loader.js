


module.exports = function(resource){
    console.log('======= resource ========')
    console.log(resource)
    // console.log(resource)
    const options = this.getOptions()
    console.log('======= options =========')
    console.log(options)
    // console.log(this.loaders)
    return resource
}

// module.exports.raw = true; // 默认情况下webpack会把传入loader的资源文件转为UTF-8的字符串，也可以设置row=true，这样loader拿到的就是原始buffer
module.exports.pitch = function(remaingRequest, preceingRequest, data){
    data.value = 42
    console.log('data', data)
    // 剩余的请求 这里包含的是请求的资源的路径
    console.log('remaingRequest', remaingRequest)
    // 先前的请求 这里包含的是请求的资源的路径
    console.log('preceingRequest', preceingRequest)
}
