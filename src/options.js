const inquirer = require('inquirer')
let optionsArr = [{
        name: "type",
        // message: "你想创建一个什么类型得模板(vue|react|ssr)",
        message: "你将要创建的是vue框架移动端模板，此框架仅适用与手机端，后续将推出更多框架敬请期待~",
        default: 'vue'
    }
    // {
    //     name: "tem",
    //     message: "你想创建一个什么样得项目('空模板：template|后台管理系统：adminTemplate')",
    //     default: 'template'
    // }
]

module.exports = () => {
    return inquirer
        .prompt(optionsArr).then(answers => {
            let { type, tem} = answers;
            // console.log('选择的答案：', type);
        })
}