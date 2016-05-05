import React from 'react';

export default class Container extends React.Component {
    static defaultProps = {
        className: '',
        style: {}
    };

    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object
    };

    render(){
        return <div className={`container ${this.props.className}`}
                    style={this.props.style}>
            {this.props.children}
        </div>;
    }
}