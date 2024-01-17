// Composant qui affiche les bulles de mots avec 
// - une version simple : que les bulles
// - une version détaillée : bulles + liste des mots proposés + statistiques sur les bulles (nb de mots, mot le plus proposé, nombre de participants)

import React from 'react';
import { ReactP5Wrapper } from "@p5-wrapper/react";

import "../styles/components/BubbleWindow.scss";
import axios from '../axios';

import { useState, useEffect } from 'react';

async function sketch(p) {

  // set the canvas size to the size of the container
  let canvasWidth = document.getElementById("bubbleWindowContainer").offsetWidth;
  let canvasHeight = document.getElementById("bubbleWindowContainer").offsetHeight;

  p.setup = () => {
    p.createCanvas(canvasWidth - 5, canvasHeight - 5);
    let ctx = p.canvas.getContext('2d');
    ctx.canvas.width = canvasWidth - 20;
    ctx.canvas.height = canvasHeight - 20;
  }


  // get id from "/session/{id}/update"
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  var recu = await axios.get("/session/" + id + "/update?token=" + localStorage.getItem("accessToken"));
  var words = recu.data.value1;

  var words_and_placed = {};
  for (var key in words) {
    words_and_placed[key] = false;
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
      var occurence = words[key];
      var multiplier = Math.max(1, Math.log(Math.max(1, occurence / 3)) / Math.log(2));

      if (words_and_placed[word]) {
        let [y, x, radiusX, radiusY] = words_pos[word];

        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI); // Use 'ellipse' instead of 'arc'
        ctx.fillWidth = 3;
        ctx.stroke();
        words_pos[word] = [y, x, radiusX, radiusY];
        ctx.font = fontSize + ' indieFlower';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(word, x, y);

      }
      else {
        words_and_placed[word] = true;

        var radiusY = 30 // Replace 'radius' with 'radiusY'
        var radiusX = word.length * 10; // Replace 'radius' with 'radiusX'
        radiusX *= multiplier;
        radiusY *= multiplier;

        var x = Math.random() * (canvas.width - 2 * radiusX) + radiusX;
        var y = Math.random() * (canvas.height - 2 * radiusY) + radiusY;

        // prevent collision with other words 
        let maxTries = 10000;
        let tries = 0;
        while (true) {
          tries++;
          if (tries > maxTries) {
            console.log("Max tries reached");
            break;
          }
          var collision = false;
          for (var key2 in words_and_placed) {
            if (key2 === word) {
              continue;
            }
            var word2 = key2;
            if (words_and_placed[word2]) {
              let [y2, x2, radiusX2, radiusY2] = words_pos[word2];
              var dx = x - x2;
              var dy = y - y2;
              var distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < radiusX + radiusX2 || distance < radiusY + radiusY2) {
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
        words_pos[word] = [y, x, radiusX, radiusY];
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

const BubbleWindow = () => {

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextDiapo = async () => {
    try {
      var token = localStorage.getItem("accessToken");
      var params = new URLSearchParams(document.location.search);
      var id = params.get("id");
      const reponse = await axios.get("/session/" + id + "/nextDiapo?token=" + token);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  }

  const prevDiapo = async () => {
    try {
      var token = localStorage.getItem("accessToken");
      var params = new URLSearchParams(document.location.search);
      var id = params.get("id");
      const reponse = await axios.get("/session/" + id + "/prevDiapo?token=" + token);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="bubbleWindowContainer">
      <ReactP5Wrapper sketch={sketch} />
      <div id="bubbleWindowButtons">
        <wired-icon-button id="bubbleWindowButtonNext" onClick={nextDiapo}> → </wired-icon-button>
        <wired-icon-button id="bubbleWindowButtonPrev" onClick={prevDiapo}> ←  </wired-icon-button>
      </div>
    </div>
  );
}

export default BubbleWindow;

