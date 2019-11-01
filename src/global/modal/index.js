import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveModal from 'react-responsive-modal';

export const Modal = ({
  open,
  handleClose,
  children,
  styles,
  closeOnEsc,
}) => (
  <ResponsiveModal
    closeOnEsc={closeOnEsc}
    center
    open={open}
    onClose={handleClose}
    styles={{
      overlay: {
        zIndex: 99999999,
        overflowX: 'auto',
      },
      modal: {
        zIndex: 99999999,
        padding: 0,
      },
      closeIcon: {
        display: 'none',
      },
      ...styles,
    }}
  >
    {children}
  </ResponsiveModal>
);

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeOnEsc: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  styles: PropTypes.instanceOf(Object),
};

Modal.defaultProps = {
  styles: {},
  closeOnEsc: true,
};
