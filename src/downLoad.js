// git包
const downLoad = require('download-git-repo')
// 动画
const ora = require('ora')
const chalk = require('chalk')
let url = 'niubg/-vue-cli3-demo'
let vue_vant = 'https://github.com:niubg/-vue-cli3-demo#vue-vant'
let downGit = (name) => {
    const spinner = ora('正在拉取模板...')
    spinner.start()
    downLoad(url, name, { clone: false }, err => {
        if (err) {
            spinner.fail();
            console.log(chalk.red(`Generation failed. ${err}`))
            return
        }
        spinner.stop()
        // spinner.succeed();
        console.log(chalk.green("项目创建成功"))
        process.exit(1)
    })

}
module.exports = downGit