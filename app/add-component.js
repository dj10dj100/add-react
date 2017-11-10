const fs = require('fs');

const {
    statelessComponent,
    classComponent
} = require('./templates');

const component = answers => {

    const {
        filename,
        componentType
    } = answers;

    const newComponent = {
        'stateless': statelessComponent,
        'class': classComponent
    }

    fs.writeFile(filename,
        newComponent[componentType](answers),
        err => err ?
            console.error(`Failed to save ${answers.filename}: ${err.message}.`)
            :
            console.log(`Success ${answers.filename} saved`)
    );

};

module.exports = {
    component
};