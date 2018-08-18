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
            <h3>Are You sure you want to delete it ?</h3>
            <button onClick={props.removeExpense}>YES</button>
            <button onClick={props.handleCloseModal}>NO</button>
        </Modal>
    );
};