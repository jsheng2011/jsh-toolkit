import React, {Component} from 'react';
import './positioningContainer.scss';
import cx from 'classnames';

export default class PositioningContainer extends Component {
    render() {
        const {fixed, x, y} = this.props;
        const classnames = cx('jsh-positioningContainer', {
            'jsh-positioningContainer--fixed': fixed
        });

        const styles = {
            left: `${x}px`,
            top: `${y}px`
        };

        return (
            <div className={classnames} style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export {PositioningContainer};
