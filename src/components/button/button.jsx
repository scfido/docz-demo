import React, {PureComponent} from 'react'
import t from 'prop-types'

export default class Button extends PureComponent{
    
    render() {
        const { children, ...props } =this.props;
        return (
            <button {...props} >{children}</button>
        );
    }
}

Button.propTypes = {
    /** 按钮尺寸，分大中小三种 */
    size: t.oneOf(['small', 'normal', 'big']),

    /** 按钮文字颜色 */
    color: t.oneOf(['green', 'bule', 'rad']),

    /** 禁用按钮 */
    disabled: t.bool,
}

Button.defaultProps = {
    size: 'normal',
    color: 'bule',
    disabled: false,
}