module.exports = {
    // 部署站点的基础路径
    base: "/",
    // 网站的标题
    title: "One Day",
    // 网站的描述
    description: "Note",
    // 注入<head>中 ：[tagName, { attrName: attrValue }, innerHTML?]
    head: [],
    // 指定dev server主机名
    host: "0.0.0.0",
    // 指定dev server端口
    prot: 8080,
    //vuepress build的输出目录
    dest: "public",
    // 提供一个 Google Analytics ID 来使 GA 生效。
    ga: undefined,
    // 多语言配置
    locales: undefined,
    // 函数，用来控制哪些文件需要生成<link rel="prefetch"> 资源提示的
    shouldPrefetch: () => true,
    // 是否对异步加载页面的内容开启占位符加载。如果它是一个字符串，那么它应该是自定义加载组件的名称。
    contentLoading: false,
    // ...
}
