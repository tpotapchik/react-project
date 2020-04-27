import React from 'react';
import BeforeShowComponent from 'components/Test/Test';

const DisplayComponent = props => (
    <div>
        Please wait for {props.BeforeShowComponent} secs.
    </div>
);

const WrappedComponent = BeforeShowComponent(DisplayComponent);

export default WrappedComponent;