#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { component } = require('./app/add-component');

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
        name: 'componentName',
        default: 'Index',
        message: 'Component name (default Index)'
    },
    {
        type: 'input',
        name: 'filename',
        default: answers => `${answers.componentName}.jsx`,
        message: answers => `File name (default ./${answers.componentName}.jsx)`
    },
    {
        type: 'confirm',
        name: 'es6',
        message: 'Use es6 exports default?'
    },
    {
        type: 'confirm',
        name: 'lifecycleMethods',
        when: answers => answers.componentType === 'class',
        message: 'Add lifecycle methods?'
    }
];

program
    .version('1.0.0')
    .description('react create component from the CLI')

program
    .command('component')
    .alias('c')
    .description(' Add a new react component')
    .action(() => {
        prompt(questions).then(responses => component(responses))
    });


program
    .command('cli <componentType> <componentName> <filename> [lifecycle]')
    .alias('cl')
    .description('1 liner to add a component without the question steps')
    .action((componentType, componentName, filename, lifecycle) => {
        const values = {
            componentType,
            componentName,
            filename,
            lifecycleMethods: lifecycle
        }
        component(values);
    });

program.parse(process.argv);