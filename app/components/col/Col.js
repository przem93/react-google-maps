import React from 'react';

export default class Col extends React.Component {
    static defaultProps = {
        className: '',
        style: {}
    };

    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        l: React.PropTypes.number,
        m: React.PropTypes.number,
        s: React.PropTypes.number,
        ol: React.PropTypes.number,
        om: React.PropTypes.number,
        os: React.PropTypes.number
    };

    render(){
        let p = this.props;
        let className = '';

        className += (p.l ? ' l' + p.l : '');
        className += (p.m ? ' m' + p.m : '');
        className += (p.s ? ' s' + p.s : '');

        className += (p.ol ? ' offset-l' + p.ol : '');
        className += (p.om ? ' offset-m' + p.om : '');
        className += (p.os ? ' offset-s' + p.os : '');

        return <div className={`col ${p.className} ${className}`}
                    style={p.style}>
            {p.children}
        </div>;
    }
}