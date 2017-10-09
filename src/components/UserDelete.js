import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class UserDelete extends Component {
  constructor(props) {
    super(props)
    this.modalDeleteHide = this.modalDeleteHide.bind(this)
    this.userDelete = this.userDelete.bind(this)
  }
  render() {
    return (
      <Modal show={this.props.modal_delete.show}>
        <Modal.Header>
          <Modal.Title>
            Are you want to delete this <string>{this.props.modal_delete.username}</string> ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.modalDeleteHide}>No</Button>
          <Button bsStyle="primary" onClick={this.userDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
    )
  }
  modalDeleteHide(e) {
    this.props.dispatch({
      type: 'users.modalDeleteHide',
    })
  }
  userDelete(e) {
    this.props.dispatch({
      type: 'userDelete',
      id: this.props.modal_delete.id
    })
    this.props.dispatch({ // delete from state
      type: 'users.delete',
      id: this.props.modal_delete.id
    })
    this.props.dispatch({
      type: 'users.modalDeleteHide',
    })
  }
}

function mapStateToProps(state) {
  let modal_delete
  if (state.users.modal && state.users.modal.list_delete) {
    modal_delete = state.users.modal.list_delete
  } else {
    modal_delete = {
      show: false,
      id: 0,
      username: '',
    }
  }

  return {
    modal_delete: modal_delete,
  }
}

export default connect(mapStateToProps)(UserDelete)