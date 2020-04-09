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
    }
    //  {
    //     type: 'list',
    //     name: "tem",
    //     message: "你想创建一个单页面还是多页面应用",
    //     choices: [
    //         { name: '单页面', value: 'onePage' },
    //         { name: '多页面', value: 'manyPage' }
    //     ]
    // }
   
]
let vueUI = [
    {
        type: 'list',
        name: 'vueUI',
        message: '请选择VUE要安装的UI框架',
        choices: [
            { name: 'vant', value: 'vant' },
            { name: 'ivew', value: 'ivew' },
            { name: 'antd', value: 'antd' }
        ]
    }
]
let reactUI = [
    {
        type: 'list',
        name: 'reactUI',
        message: '请选择React要安装的UI框架',
        choices: [           
            { name: 'antd', value: 'antd' }
        ]
    }
]

module.exports = (callback) => {  
    let arr = [] 
    return inquirer
    .prompt(optionsArr).then(answers => {
        let { frame } = answers;
        arr.push(frame)
        if (frame == "vue") {            
            return inquirer.prompt(vueUI).then(answers => {
                let {vueUI} = answers
                arr.push(vueUI)
                callback(arr)        
            })
        } else if (frame == "react") {
            return inquirer.prompt(reactUI).then(answers => {
                let { reactUI } = answers
                arr.push(reactUI)
                callback(arr)           
            })
        }        
    }) 
}