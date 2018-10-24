const fs = require("fs");

const { statelessComponent, classComponent } = require("./templates");

/**
 *
 * @param {object} answers - List of answers from the end-user, defining which component the user wants.
 */
const component = answers => {
  const { filename, componentType } = answers;

  const newComponent = {
    stateless: statelessComponent,
    class: classComponent
  };

  fs.writeFile(
    filename,
    newComponent[componentType](answers),
    err =>
      err
        ? console.error(`Failed to save ${answers.filename}: ${err.message}.`)
        : console.log(`Success ${answers.filename} saved`)
  );
};

module.exports = {
  component
};
