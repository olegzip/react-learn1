import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Top from './components/Top';
import ClassComponent from './components/ClassComponent'
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        const { name, surname, age } = this.props.user;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <p>
                    Привет из App, {name} {surname}!
                </p>
                <p>Тебе уже {age} ?</p>
            </div>
        )
    }
}


// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user
    }
}

export default connect(mapStateToProps)(App)

// let text = "sdfsdfds";
//
// const textChange = (props) => {
//     text = !text;
// };
