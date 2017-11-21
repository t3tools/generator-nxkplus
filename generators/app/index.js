const Generator = require('yeoman-generator')
const chalk = require('chalk')

// Demo Generator
module.exports = class extends Generator  {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  initializing(){
    this.log('')
    this.log('   ',chalk.bold('yo nxkplus')+' CLI Options:')
    this.log('')
    this.log(`      ${chalk.blue('$')} yo nxkplus:auth`)
    this.log(`      ${chalk.blue('$')} yo nxkplus:react`)
    this.log(``)
  }

  prompting(){}

  configuring(){}

  default(){}

  writing(){
    // this.npmInstall(['passport', 'cookie-session', 'cookie-parser', 'objection-password'], { 'save': true, 'save-exact': true });
  }

  install(){}

  end(){}

  _thisIsAPrivateMethod(){}


}
