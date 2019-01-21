import React, {Component} from 'react';
import './positioningContainer.scss';
import cx from 'classnames';

export default class PositioningContainer extends Component {
    render() {
        const {fixed, absolute, relative, x, y, left, right, top, bottom} = this.props;
        const classnames = cx('jsh-positioningContainer', {
            'jsh-positioningContainer--fixed': fixed,
            'jsh-positioningContainer--absolute': absolute,
            'jsh-positioningContainer--relative': relative
        });

        const styles = {
            left: `${x}px`,
            top: `${y}px`,
            left,
            right,
            top,
            bottom
        };

        return (
            <div className={classnames} style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export {PositioningContainer};
