// 内网网页搜索、页面抓取简易实现
exports.webSearch = async function(keyword) {
    console.log("执行网页搜索，关键词：", keyword);
    return [
        {
            title: "检索结果示例",
            url: "https://example.intranet/doc",
            summary: "内网文档检索内容摘要"
        }
    ]
}

exports.webFetch = async function(url) {
    console.log("抓取页面内容：", url);
    return "页面正文内容，用于AI总结回答用户问题";
}
