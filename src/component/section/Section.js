import React, {Component} from 'react';
import './Section.scss';
import cx from 'classnames';

export default class Section extends Component {
    render() {
        const {spaceDown, liquid, className, ...others} = this.props;
        const classnames = cx('jsh-section', className, {
            [`jsh-section--space-down-${spaceDown}`]: spaceDown,
            'jsh-section--liquid': liquid
        });

        return (
            <section className={classnames} {...others}>
                {this.props.children}
            </section>
        );
    }
}
export {
    Section
};
