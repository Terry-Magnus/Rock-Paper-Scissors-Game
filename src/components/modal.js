import React from "react"
import original from "../images/image-rules.svg"
import bonus from "../images/image-rules-bonus.svg"
import close from "../images/icon-close.svg"


const Modal = ({ setModalOpen, mode }) => {
    return (
        <div className="modal">
            <div className="modal-header">
                <span>Rules</span>
            </div>
            <div className="modal-img">
                <img src={mode ? original : bonus} alt="rules" />
            </div>
            <div className="modal-footer">
                <span onClick={() => setModalOpen(false)} className="close"><img src={close} alt="close" /></span>
            </div>
        </div>
    )
}

export default Modal;