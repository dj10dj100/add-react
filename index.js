#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { statelessComponent, classComponent } = require('./app/add-component');


const newComponent = {
    'stateless': statelessComponent,
    'class': classComponent
}


const questions = [
    {
        type: 'list',
        name: 'componentType',
        message: 'Choose component type',
        choices: [
            'class',
            'stateless'
        ]
    },
    {
        type: 'input',
        name: 'filename',
        default: 'index.jsx',
        message: 'File name (default ./index.jsx)'
    },
    {
        type: 'confirm',
        name: 'lifecycleMethods',
        when: answers => answers.componentType === 'class',
        message: 'Add lifecycle methods?'
    }
];

program
    .version('0.0.1')
    .description('react create component from the CLI')

program
    .command('add')
    .alias('a')
    .description(' Add a new react component')
    .action(() => {
        prompt(questions).then(responses =>
            newComponent[responses.componentType](responses)
        )
    })


if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}


program.parse(process.argv);