import QRCode from "react-qr-code";
import React, { useState } from 'react';

export default function QRCodeGenerator() {

    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('');
    }

    return (
        <div className="qrcode-container">
            <h1>Generate QR Code</h1>
            <div>
                <input onChange={(e) => setInput(e.target.value)}
                    type="text" name="qr-code"
                    placeholder="Enter text to generate QR Code"
                    value={input}
                    id="qr-code-input" />
                <button
                    onClick={handleGenerateQrCode}
                    disabled={input && input.trim() !== "" ? false : true}
                >Generate</button>
            </div>
            <div>
                <QRCode
                    id="qrcode-value"
                    value={qrCode}
                    size={300} 
                />
            </div>
        </div>
    )
}