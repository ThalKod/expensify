import React from "react";
import Modal from "react-modal";

export default (props)=>{
    return (
        <Modal
        isOpen={props.showModal}
        contentLabel = "Comfirm Deletion"
        closeTimeoutMS={200}
        className="modal"
        >
            <h3>Are You sure you want to remove it ?</h3>
            <button className="button button--danger" onClick={props.removeExpense}>YES</button>
            <button className="button" onClick={props.handleCloseModal}>NO</button>
        </Modal>
    );
};