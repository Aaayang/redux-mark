import React, { Component } from 'react';
import { connect } from '../react-redux';
import actionCreatorObj from '../actions'

class Counter1 extends Component {
    render() {
        return (
            <div>
                <p>{this.props.age}</p>
                <button onClick={e => this.props.add1(e, 3)}>add</button>
                <button onClick={e => this.props.minus1(e, 2)}>minus</button>
                <button onClick={e => this.props.addAsync1(e, 1)}>addAsync</button>
                <button onClick={e => this.props.addPromise1(e, 1)}>addPromise</button>
                <button onClick={e => this.props.payloadPromise1(e, 1)}>payloadPromise</button>
            </div>
        );
    }
}

// 把仓库中的完整状态映射为组件的属性对象，这里的返回值关系到组件中的取值方式
// 返回的至少是一个对象，因为connect内部会直接setState 返回值
let mapStateToProps = (state) => state.counter1Data;
// 把dispatch方法映射为组件的属性对象
/* let mapDispatchToProps = (dispatch) => ({
    add1() {
        dispatch({
            type: 'ADD1',
            num: 3
        })
    },
    minus1() {
        dispatch({
            type: 'MINUS1',
            num: 2
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter1); */


export default connect(mapStateToProps, actionCreatorObj)(Counter1);