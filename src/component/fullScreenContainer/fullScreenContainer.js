import React, {Component} from 'react';
import './fullScreenContainer.scss';
import cx from 'classnames';

export default class FullScreenContainer extends Component {
    render() {
        const {enable} = this.props;
        const classnames = cx('jsh-fullScreenContainer', {
        });

        const styles = {

        };

        return (
            <div className={enable ? classnames : null} style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export {FullScreenContainer};
