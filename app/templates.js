const react = `
const React = require('react');
`

/**
 * @name statelessComponent 
 * @param {*} answers 
 * @return {string} 
 */
const statelessComponent = answers => `
${react}
const ${answers.componentName} = () => {
    return (
        <div>
        </div>
    )
};
module.exports = ${answers.componentName};
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



const classComponent = answers => {
    let lifecycleMethods = answers.lifecycleMethods ? lifecycles : '';
    return `
${react}

class ${answers.componentName} extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    ${lifecycleMethods}    
    render() {
        return (
            <div>
            </div>
        );
    }
}

module.exports = ${answers.componentName};
`;
}

module.exports = {
    statelessComponent,
    classComponent
}