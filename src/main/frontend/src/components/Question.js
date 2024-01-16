import {useDrag} from "react-dnd";
import React from "react";
import "../styles/components/DropQuestion.css";

const Question = ({ id, text, index, moveQuestion }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'QUESTION',
        item: { id, index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div id="question" ref={(node) => drag(node)} >
            {text}
        </div>
    );
};
export default Question;