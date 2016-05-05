import React from 'react';

export default class Row extends React.Component {
    static defaultProps = {
        className: '',
        style: {}
    };

    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object
    };

    render(){
        return <div className={`row ${this.props.className}`}
                    style={this.props.style}>
            {this.props.children}
        </div>;
    }
}