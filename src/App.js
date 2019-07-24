import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {

    return (
        <div className="App">
            <Header text={text}/>
            <Content textChange={textChange}/>
            <Footer />
        </div>
    );
}

let text = false;

const textChange = (props) => {
    text = !text;
};

export default App;
