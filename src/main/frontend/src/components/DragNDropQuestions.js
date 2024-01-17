
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Question from "./Question";
import DropZone from "./DropZone";

import "../styles/components/DragNDropQuestions.scss";


const DragNDropQuestions = ({ questions = [], onDrop }) => {
    const [orderedQuestions, setOrderedQuestions] = useState(questions);

    const moveQuestion = (fromIndex, toIndex) => {
        const newQuestions = [...orderedQuestions];
        const [removed] = newQuestions.splice(fromIndex, 1);
        newQuestions.splice(toIndex, 0, removed);
        setOrderedQuestions(newQuestions);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            {orderedQuestions.map((question, index) => (
                <Question key={question.id} id={question.id} text={question.text} index={index} moveQuestion={moveQuestion} />
            ))} 
        <DropZone onDrop={onDrop} />
        </DndProvider>
    );
};

export default DragNDropQuestions;

