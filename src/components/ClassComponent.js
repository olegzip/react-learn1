import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {

    static defaultProps = {
        name: 'DEFAULT'
    }

    render() {
        return (
            <div className='comp'>
                <h1>Привет, {this.props.name}</h1>
            </div>
        );
    }
}

export default ClassComponent;

ClassComponent.propTypes = {
    name: PropTypes.string
};
