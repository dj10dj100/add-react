


const whichModule = es6 => es6 ? 'exports default ' : 'module.exports =';

const react = `
const React = require('react');
`;

/**
 * 
 * @param {*} answers 
 */
const statelessComponent = ({
    componentName,
    es6
}) =>
    `
${react}
const ${componentName} = () => {
    return (
        <div>
        </div>
    )
};
${whichModule(es6)} ${componentName};
`;


const lifecycles = `
    componentWillMount() {
        
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    shouldComponentUpdate() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }
`;

const classComponent = ({
    componentName,
    lifecycleMethods,
    es6
}) => {

    let includeLifycycleMethods = lifecycleMethods ? lifecycles : '';

    return `
${react}

class ${componentName} extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    ${includeLifycycleMethods}    
    render() {
        return (
            <div>
            </div>
        );
    }
}

${whichModule(es6)} ${componentName};
`;
}

module.exports = {
    statelessComponent,
    classComponent
}