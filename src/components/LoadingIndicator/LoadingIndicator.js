import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

export const LoadingIndicator = ({ area }) => {
  const { promiseInProgress } = usePromiseTracker({ area });
  return (
    promiseInProgress && (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
    )
  );
};

LoadingIndicator.propTypes = {
  area: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  area: 'area',
};

export default LoadingIndicator;

export { trackPromise, usePromiseTracker };
