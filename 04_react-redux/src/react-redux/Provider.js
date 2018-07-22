import React, { Component } from 'react'
import { Provider as StoreProvider } from './context';

import PropTypes from 'prop-types';

export default class Provider extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }
    render() {
        let value = { store: this.props.store };
        return (
            <StoreProvider value={value}>
                {this.props.children}
            </StoreProvider>
        )
    }
}