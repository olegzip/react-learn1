import React from 'react';
import {Link} from 'react-router-dom';

function Menu(props) {

    return (
        <div className='comp'>
            <ul>
                <li><Link to='/'>Link 1 {props.props}</Link></li>
                <li><Link to='/2'>Link 2</Link></li>
                <li><Link to='/3'>Link 3</Link></li>

            </ul>
        </div>
    )

}

export default Menu;