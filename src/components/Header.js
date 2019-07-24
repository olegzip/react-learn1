import React from 'react';

 function Header(props) {

    return (
        <div>
            <h1>THIS IS HEADER</h1>
            <p>{props.text ?
                    <p>some text 1</p>:
                    <p>some text 2</p>
            }</p>
        </div>
    );

};

export default Header;