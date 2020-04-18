import React, {Component} from 'react';
import TextInput from './components/TextInput'

import './ArticleSearch.scss'

//  export default class ArticleSearch extends Component {
//
//     onChangeHandler = (e) => {
//         const arr = [];
//         const targetValueLowercase = e.target.value.toLowerCase();
//
//         this.props.defaultItems.forEach(item => {
//             const titleLowercase = item.title.toLowerCase();
//             if (titleLowercase.indexOf(targetValueLowercase) !== -1) {
//                 arr.push(Object.assign({}, item));
//             }
//         });
//         this.props.onInput(arr);
//     };
//
//     render() {
//         return (
//             <form className="article-form">
//                 <div className="article-form-row form-row">
//                     <label>What are you looking for?</label>
//                     <TextInput
//                         name="search"
//                         autoComplete="off"
//                         onHandleChange={this.onChangeHandler}
//                     />
//                 </div>
//             </form>
//         );
//     }
// }

const ArticleSearch = ({defaultItems, onInput}) => {
    function onChangeHandler(e) {
        const arr = [];
        const targetValueLowercase = e.target.value.toLowerCase();

        defaultItems.forEach(item => {
            const titleLowercase = item.title.toLowerCase();
            if (titleLowercase.indexOf(targetValueLowercase) !== -1) {
                arr.push(Object.assign({}, item));
            }
        });
        onInput(arr);
    }

    return (
        <form className="article-form">
            <div className="article-form-row form-row">
                <label>What are you looking for?</label>
                <TextInput
                    name="search"
                    autoComplete="off"
                    onHandleChange={onChangeHandler}
                />
            </div>
        </form>
    );
};

export default ArticleSearch;
