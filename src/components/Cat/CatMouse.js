import React, {Component} from 'react';
import Cat from './Cat';
import Mouse from './Mouse';

class CatMouse extends Component {
    render() {
        return (
            <div>
                <Mouse render={mouse => (<Cat mouse={mouse} />)}/>
            </div>
        );
    }
}

export default CatMouse;