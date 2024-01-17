// QRcode pour rejoindre une session en le flashant
import React from 'react';
import QRCODE from 'qrcode';

import "../styles/components/QRCode.scss";


class QRcode extends React.Component {

    generateQRCode() {
        QRCODE.toCanvas(document.getElementById('QRCodeCanvas'), "hello", function (error) {
            if (error) console.error(error);
            console.log('success!');
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
