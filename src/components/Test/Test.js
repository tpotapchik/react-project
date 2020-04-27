import React, { Component } from 'react';

const BeforeShowComponent = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    BeforeShowComponent={5}
                />
            );
        }
    }
};

export default BeforeShowComponent;