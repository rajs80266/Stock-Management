import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './shell.css';

const Shell = (props) => {
    const { children } = props;

    return (
        <div className='shell'>
            {children}
        </div>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
    mapStateToProps,
)(Shell);