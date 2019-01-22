import React, {Component} from 'react';
import './fullScreenContainer.scss';
import cx from 'classnames';

export default class FullScreenContainer extends Component {
    render() {
        const {style} = this.props;
        const classnames = cx('jsh-fullScreenContainer', {
        });

        const styles = {
            ...style
        };

        return (
            <div className={classnames} style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export {FullScreenContainer};
