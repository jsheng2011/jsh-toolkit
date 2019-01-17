import React, {Component} from 'react';
import './menu.scss';
import cx from 'classnames';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }
    _onChange() {

    }
    render() {
        const classnames = cx('jsh-menu');

        return (
            <div className={classnames} onChange={this._onChange}>
                {this.props.children}
            </div>
        );
    }
}
Menu.Item = props => {
    const {className, ...others} = props;
    const classNames = cx('jsh-menu__item', className);

    return (
        <div className={classNames} {...others}>
            {props.children}
        </div>
    );
};
export {Menu};
