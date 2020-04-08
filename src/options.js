const inquirer = require('inquirer')
let optionsArr = [
    {
        type: 'list',
        name: 'frame',
        message: '选择框架类型',
        choices: [
            { name: 'vue', value: 'vue' },
            { name: 'react', value: 'react' }
        ]
    },
     {
        type: 'list',
        name: "tem",
        message: "你想创建一个单页面还是多页面应用",
        choices: [
            { name: '单页面', value: 'onePage' },
            { name: '多页面', value: 'manyPage' }
        ]
    }
   
]

module.exports = () => {
    return new Promise((resolve, reject) => {
        return inquirer
        .prompt(optionsArr).then(answers => {
            console.log(answers)
            let { type, tem} = answers;
            // console.log('选择的答案：', type);
            resolve()
        })
    })
    
}