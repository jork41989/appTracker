import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';


import './modal.css';


function Modal ({payload, closeModal}) {
  if (!payload) {
    return null;
  }

  let component;
  switch(payload.modal){
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  let modalBackgroundClass = payload.modal === ('trailer' || 'actor') ? "modal-background-trailer" : "modal-background";
  let modalChildClass = payload.modal === 'review' ? "modal-child-review" : "modal-child";

  return (
    <div className={modalBackgroundClass} onClick={closeModal}>
      <div className={modalChildClass} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    payload: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
