// QRcode pour rejoindre une session en le flashant
import React from 'react';
import QRCODE from 'qrcode';

import "../styles/components/QRCode.scss";


class QRcode extends React.Component {

    
    generateQRCode() {

        let params = new URLSearchParams(document.location.search);
        let url = "localhost:3000/guest?id=" + params.get("id");

        QRCODE.toCanvas(document.getElementById('QRCodeCanvas'), url, function (error) {
            if (error) console.error(error);
        })
    }

    componentDidMount() {
        this.generateQRCode();
    }

    render() {
        return (
            <div id="QRCodeContainer">
                <canvas id="QRCodeCanvas"></canvas>
            </div>
        );
    }
}

export default QRcode;
