import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../modal/index';
import {
  CompanyContent,
} from './pages';

const renderDataReviewComponent = (data, type) => {
  console.log(data);
  if (type === 'company') {
    return (
      <CompanyContent
        data={data}
      />
    )
  }
  return null;
}

export const Review = ({
  open, handleClose, data, type,
}) => type && (
  <Modal
    open={open}
    handleClose={handleClose}
  >
    {renderDataReviewComponent(data, type)}
  </Modal>
)

Review.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.string,
}

Review.defaultProps = {
  data: {},
  type: '',
}
