import { useState } from "react";
import Modal from "./modal";
import './modal.css';

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && (
                    <Modal
                        id={"custom-id"}
                        body={"Customized Body"}
                        onClose={onClose}
                        footer={<h2>Customized Footer</h2>}
                    />
                )
            }
        </div>
    )
}