[![npm](https://img.shields.io/npm/dm/add-react.svg)]()
[![npm](https://img.shields.io/npm/dt/add-react.svg)]()
[![npm](https://img.shields.io/npm/v/add-react.svg)]()

![alt Preview of package actions][Preview]

[Preview]: how-to.gif "Preview of package actions"

# Add React components from cli
* Supports JSX flavoured components
* Can make class (stateful) or stateless component
* Uses UMD (universal module syntax) for wider support

  Commands:
### Installation

Add as a global
`yarn add add-react -g` or `npm install add-react -g`

or to add to current project only

`yarn add add-react`

To use:
`add-react <command>`
### Commands
`component | c` - add a new react component, this will walk you through a few steps to create the component
example:

`add-react component` 

or 

`add-react c`

### Options:

add-react supports two component types

#### stateless (functional)
Stateless functional component only has 2 configuration options:
* Component name 
* Filename

#### class
Es6 class contain boilerplate code for stateful component extending react.component.
Has 3 options:
* Component name
* Filename
* LifecycleMethods - if 'true' boilerplate contains all default react components. 
See example component below

```javascript
const React = require('react');

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
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
    
    render() {
        return (
            <div>
            </div>
        );
    }
}

module.exports = Navigation;
```


### CLI only

If you prefer to just use a one liner and not go through the questions you can use the following:

`add-react cli <componentType> <componentName> <filename> [lifecycle]`

`componentType` : 'class' or 'stateless'

`componentName` : <ComponentName>

`filename` : filename - e.g Component.jxs

`lifecycle`: boolean - whether class (stateful) component should contain all lifecycle methods


# utilities
-V, --version  output the version number
-h, --help     output usage information