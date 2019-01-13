import React, {Component} from 'react';

import './Article.scss';

export default class Article extends Component {
    render() {
        console.log('asdassdsadasa');
        const {...others} = this.props;

        return (
            <article className="jsh-article" {...others}>
                {this.props.children}
            </article>
        );
    }
}

export {
    Article
};
