#! /usr/bin/env node
const cmd = require("commander");
const chalk = require("chalk");
const downGit = require('./src/downLoad')
const options = require('./src/options')
cmd.command('init').description('初始化魔板').action(async (args) => {
    // console.log("项目名称", args.args[0])
    let projectName = args.args[0]
    typeof projectName !== 'string' && (console.log(chalk.red('缺少项目名称，请给项目起个名字！')), process.exit(1))
    console.log(chalk.yellow('塔读脚手架初始化模板 \n'))
    // 填选项
    await options()
    // 拉取
    await downGit(projectName)
})

cmd.parse(process.argv)
// console.log(66666)