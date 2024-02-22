export default function Modal({ id, header, body, footer, onClose }) {
    return (
        <div id={id || 'Modal'} className="modal">
            <div className="modal-content">
                <div className="header">
                    <span onClick={onClose} className="close-modal-icon">&times;</span>
                    <h2>{header ? header : "Modal Header"}</h2>
                </div>
                <div className="body">
                    <p>{body ? body : "Modal Body"}</p>
                </div>
                <div className="footer">
                    {footer ? footer : <h2>Footer</h2>}
                </div>
            </div>
        </div>
    );
}