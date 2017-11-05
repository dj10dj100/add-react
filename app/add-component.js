const fs = require('fs');
const {
    statelessComponent,
    classComponent
} = require('./templates');

/**
 * {object} newComponent
 * table look up for which component to use;
 */
const newComponent = {
    'stateless': statelessComponent,
    'class': classComponent
};

/**
 * 
 * @param {answers}
 * @param {answers.filename} - filename that's written to file
 * @param {answers.componentType} - class or stateless
 */
const component = answers => {
    const { filename, componentType } = answers;
    fs.writeFile(
        filename,
        newComponent[componentType](answers),
        err => err ?
            console.error(`Failed to save ${filename}: ${err.message}.`) : console.log(`Success ${filename} saved`)
    );
}


module.exports = {
    component
};