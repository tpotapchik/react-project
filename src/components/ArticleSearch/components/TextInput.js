import React, {Component} from 'react';

import './TextInput.scss';

// class TextInput extends Component {
//     render() {
//         return (
//             <input
//                 type="text"
//                 name={this.props.name}
//                 autoComplete={this.props.autoComplete}
//                 onChange={this.props.onHandleChange}
//             />
//         );
//     }
// }

const TextInput = (props) => {
    const {name, autoComplete, onHandleChange} = props;
    return (
        <input
            type="text"
            name={name}
            autoComplete={autoComplete}
            onChange={onHandleChange}
        />
    );
};

export default TextInput;