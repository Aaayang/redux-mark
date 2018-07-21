import React from 'react';
// step1
import { connect } from 'react-redux';

import { add, remove, addAsync } from './index.redux';

class App extends React.Component {
    render() {
        return <div>
            <h3>{this.props.num}</h3>
            <button onClick={this.props.add}>add</button>
            <button onClick={this.props.remove}>remove</button>
            <button onClick={this.props.addAsync}>addAsync</button>
        </div>
    }
}

const mapStatetoProps = (state) => {
    return {
        num: state
    }
}
const actionCreators = { add, remove, addAsync };

// 属性和方法分别给出
App = connect(mapStatetoProps, actionCreators)(App);
export default App;