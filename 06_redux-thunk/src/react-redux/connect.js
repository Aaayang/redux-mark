// 高阶组件是一个函数，实现的是仓库和组件的链接
import React, { Component } from 'react';
import { Consumer } from './context';
import { bindActionCreators } from '../redux';

// 首先返回的是一个函数
export default function (mapStateToProps, mapDispatchToProps) {
    // 返回的还是一个函数，接收一个组件
    // let mapStateToProps = (state) => state.counter1Data;

    return function (ReceiveCom) {
        class Proxy extends Component {
            // 直接调用，把全部状态传过去，并返回经过 mapStateToProps 筛选后的数据
            state = mapStateToProps(this.props.store.getState());
            
            componentDidMount() {
                // 在这里订阅了，其实不使用 react-redux 时，我们是在 ReceiveCom 组件中订阅的，由此 ReceiveCom 中的代码也就精简了
                this.unsubscribe = this.props.store.subscribe(() => {
                    // 可见 mapStateToProps 返回的至少是一个对象，因为这里setState的必须是一个对象 
                    this.setState(mapStateToProps(this.props.store.getState()));
                });
            }
            componentWillUnmount = () => {
                this.unsubscribe();
            }

            render() {
                let actions = {};
                //如果说 mapDispatchToProps 是一个函数，执行后得到属性对象
                if (typeof mapDispatchToProps === 'function') {
                    actions = mapDispatchToProps(this.props.store.dispatch);
                } else {
                    //如果说 mapDispatchToProps 是一个对象的话，我们需要手工绑定
                    actions = bindActionCreators(mapDispatchToProps, this.props.store.dispatch);
                }
                // 把加工后的 state 和 actions 传递过去，所以我们在使用 ReceiveCom 时只需通过 this.props 就可取到所有数据
                return <ReceiveCom {...this.state} {...actions} />
            }
        }
        // 最后必然返回的是一个组件
        return () => (
            <Consumer>
                {
                    value => <Proxy store={value.store} />
                }
            </Consumer>
        );
    }
}