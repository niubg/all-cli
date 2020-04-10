// git包
const downLoad = require('download-git-repo')
// 动画
const ora = require('ora')
const chalk = require('chalk')
// let url = 'niubg/template'
let url = 'https://github.com:niubg/template'
let downGit = (name, branchName) => {
    const spinner = ora('正在拉取模板...')
    spinner.start()
    downLoad(`${url}#${branchName}`, name, { clone: false }, err => {
        if (err) {
            spinner.fail();
            console.log(chalk.red(`Generation failed. ${err}`))
            return
        }
        spinner.stop()
        // spinner.succeed();
        ora(chalk.green("项目创建成功")).succeed()
        process.exit(1)
    })

}
module.exports = downGit