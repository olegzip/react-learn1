import React from 'react';

const Top = (props) => {

    return (
        <div className='comp'>
            <h1>THIS IS TOP</h1>
            <div>{props.text ?
                <p>some text 1</p> :
                <p>some text 2</p>
            }</div>
        </div>
    );

};

export default Top;
