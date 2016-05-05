import React from 'react';
import {Container} from '../../components'

export default class ApplicationView extends React.Component {
    render() {
        return <Container>
            {this.props.children}
        </Container>;
    }
}