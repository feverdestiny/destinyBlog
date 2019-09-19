const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${__dirname}/..`);
console.log(JSON.stringify(barConfig));
module.exports = {
    title: "FEVERDDESTINY", // 设置网站标题
    description: "wend",
    base: "/",
    themeConfig: {
        nav: [
            { text: "主页", link: "/" },
            { text: "前端规范", link: "/frontEnd/" },
            { text: "开发环境", link: "/development/" },
            { text: "学习文档", link: "/notes/" },
            // 下拉列表的配置
            {
                text: "Languages",
                items: [
                    { text: "Chinese", link: "/language/chinese" },
                    { text: "English", link: "/language/English" }
                ]
            }
        ],
        sidebar: {
            "/notes": [
                {
                    title: "前端",
                    collapsable: true,
                    children: ["/notes/frontEnd/VueJS组件编码规范"]
                },
                {
                    title: "后端",
                    collapsable: true,
                    children: ["notes/backEnd/nginx入门"]
                },
                {
                    title: "复习",
                    collapsable: true,
                    children: [
                        "notes/interview/promise",
                        "notes/interview/js异步编程4中方法"
                    ]
                }
            ]
        }
    },
    sidebarDepth: 2
};
