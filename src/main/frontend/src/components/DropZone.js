import {useDrop} from "react-dnd";
import React from "react";
import "../styles/components/DropQuestion.css";

const DropZone = ({ onDrop }) => {
    const [, drop] = useDrop({
        accept: 'QUESTION',
        drop: (item) => onDrop(item.id),
    });

    return (
        <div id="dropZone" ref={drop} >
           Glissez une question ici pour la séparer dans une nouvelle fenêtre
        </div>
    );
};
export default DropZone;