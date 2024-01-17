// Composant qui affiche les bulles de mots avec 
// - une version simple : que les bulles
// - une version détaillée : bulles + liste des mots proposés + statistiques sur les bulles (nb de mots, mot le plus proposé, nombre de participants)

import React from 'react';
import { ReactP5Wrapper } from "@p5-wrapper/react";

import "../styles/components/BubbleWindow.scss";
import axios from '../axios';

async function sketch(p) {

    function createHiPPICanvas(width, height) {
    const ratio = window.devicePixelRatio;
    const canvas = document.createElement("canvas");

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.getContext("2d").scale(ratio, ratio);

    return canvas;
    }

    // set the canvas size to the size of the container
    let canvasWidth = document.getElementById("bubbleWindowContainer").offsetWidth;
    let canvasHeight = document.getElementById("bubbleWindowContainer").offsetHeight;
    
    p.setup = () => {
        p.createCanvas(canvasWidth - 5, canvasHeight - 5);
        let ctx = p.canvas.getContext('2d');
        ctx.canvas.width = canvasWidth - 20;
        ctx.canvas.height = canvasHeight - 20;
    }

    // var words = ['Noel', 'froid', 'Hiver', 'Sapin'];
    // get id from "/session/{id}/update"
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    var recu = await axios.get("/session/"+id+"/update?token="+localStorage.getItem("accessToken"));
    var words = recu.data.value1;
    
    var words_and_placed = {};
    for (var i = 0; i < words.length; i++) {
      words_and_placed[words[i]] = false;
    }

    var words_pos = {};

    p.drawP = () => {
      var canvas = p.canvas;
      var ctx = p.canvas.getContext('2d');
      canvas.width = canvasWidth - 20;
      canvas.height = canvasHeight - 20;
      canvas.style.width = canvasWidth - 20;
      canvas.style.height = canvasHeight - 20;
      
      let fontSize = "1.6rem";

      for (var key in words) {
        var word = key;
        var occurence = word[key];

        if (words_and_placed[word]) {
            let [y,x,radiusX,radiusY] = words_pos[word];

            ctx.beginPath();
            ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI); // Use 'ellipse' instead of 'arc'
            ctx.fillWidth = 3;
            ctx.stroke();
            words_pos[word] = [y,x,radiusX,radiusY];
            ctx.font = fontSize + ' indieFlower';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(word, x, y);

        }
        else {
          words_and_placed[word] = true;

          var radiusY = 35 // Replace 'radius' with 'radiusY'
          var radiusX = word.length * 20; // Replace 'radius' with 'radiusX'

          var x = Math.random() * (canvas.width - 2 * radiusX) + radiusX;
          var y = Math.random() * (canvas.height - 2 * radiusY) + radiusY;

          // prevent collision with other words 
          while (true) {
            var collision = false;
            for (var j = 0; j < words.length; j++) {
              if (i === j) {
                continue;
              }
              var word2 = words[j];
              if (words_and_placed[word2]) {
                let [y2,x2,radiusX2,radiusY2] = words_pos[word2];
                var dx = x - x2;
                var dy = y - y2;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < radiusX + radiusX2) {
                  collision = true;
                  break;
                }
              }
            }
            if (collision) {
              x = Math.random() * (canvas.width - 2 * radiusX) + radiusX;
              y = Math.random() * (canvas.height - 2 * radiusY) + radiusY;
            }
            else {
              break;
            }
          }

          ctx.fillStyle = '#000';
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI); // Use 'ellipse' instead of 'arc'
          words_pos[word] = [y,x,radiusX,radiusY];
          ctx.fill();

          ctx.fillStyle = '#fff';
          ctx.font = fontSize + ' indieFlower';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(word, x, y);

     }
      }
    }
    p.draw = () => {
        p.drawP();
    }

}

class BubbleWindow extends React.Component {

    render() {
        return (
            <div id="bubbleWindowContainer">
            <ReactP5Wrapper sketch={sketch} />
            </div>
        );
    }
}

export default BubbleWindow;

