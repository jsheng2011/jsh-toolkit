import React, {Component} from 'react';
import cx from 'classnames';
import './TextArea.scss';

export default class TextArea extends Component {
    constructor(props) {
        super(props);
        this._handleOnChange = this._handleOnChange.bind(this);
        this._getCurrentValueLines = this._getCurrentValueLines.bind(this);
        this.node = React.createRef();
        this.state = {
            step: 1
        };
    }
    UNSAFE_componentWillReceiveProps(props) {
        if (props.value) {
            this.setState({
                step: this._getCurrentValueLines(props.value)
            });
        }
    }

    _getCurrentValueLines(val) {
        return val.split(/\r\n|\r|\n/).length;
    }

    _handleOnChange(e) {
        const {onChange} = this.props;
        onChange && onChange(e);
        this.setState({
            step: this._getCurrentValueLines(this.node.current.value)
        });
    }
    render() {
        const {fullwidth, spaceDown, style, ...others} = this.props;
        const classNames = cx('jsh-textarea', {
            'jsh-textarea__fullwidth': fullwidth,
            [`jsh-textarea--space-down-${spaceDown}`]: spaceDown // TODO: make it more centralized
        });
        const styles = {
            ...style,
            height: `${16 * this.state.step + 24}px`
        };

        return (
            <textarea ref={this.node} {...others} onChange={this._handleOnChange} className={classNames} style={styles}/>
        );
    }
}

export {
    TextArea
};
