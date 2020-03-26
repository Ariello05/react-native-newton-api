import React from 'react';
import SingleInputScene from './SingleInputScene';
import Math_Function from '../constants/math_functions.js';
import fetchFunction from '../api/fetchFunction';
import PropTypes from 'prop-types';

const fetchData = (arg, callback) => {
  return fetchFunction(Math_Function.derive, arg, callback);
};

const DeriveScreen = React.memo((props) => {
  return (
    <SingleInputScene
      {...props}
      functionApiCall={fetchData}
      title={'Derive!'}
    />
  );
});
DeriveScreen.propTypes = {
  functionHandler: PropTypes.func.isRequired,
  functionData: PropTypes.string.isRequired,
};

export default DeriveScreen;
