import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ErrorStyles = styled.div`
background-color:pink;
color:red;
height:30px;
`;

const Error = ({mensaje}) => { 
    return ( <ErrorStyles>
        <p>{mensaje}</p>
        </ErrorStyles>
     );
}
 
Error.propTypes = {
    mensaje: PropTypes.string.isRequired,

}

export default Error;