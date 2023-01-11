import React, { Component } from 'react';

class LifeCycle extends Component {
    componentDidMount() {
        alert(new Date())
    }
    componentDidUpdate() {
        console.log("Дякуємо, що залишаєтесь з нами");
    }
    componentWillUnmount() {
        localStorage.setItem("int", Math.floor(Math.random() * 11))
    }
    render() {
        return(<div></div>)

    }
} 



export default LifeCycle